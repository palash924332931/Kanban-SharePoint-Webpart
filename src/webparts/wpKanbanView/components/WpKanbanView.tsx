import * as React from 'react';
import styles from './WpKanbanView.module.scss';
import { IWpKanbanViewProps } from './IWpKanbanViewProps';
import kanbanViewService from "../service/KanvanViewApi";
import ReactHtmlParser from 'react-html-parser';
import Moment from 'react-moment';
import { SPComponentLoader } from '@microsoft/sp-loader';
import './modal.css';
import * as strings from 'WpKanbanViewWebPartStrings';

export default class WpKanbanView extends React.Component<IWpKanbanViewProps, { dragDivId: any; listTitle: string, statusItems: any, taskListItems: any }> {
  public listItems = [];
  public choiceItems = [];
  public listInternalName = '';
  public isDropOnCard = false;
  public dragDivId = 0;
  public constructor(props: IWpKanbanViewProps) {
    super(props);
    this.state = {
      listTitle: '',
      statusItems: [],
      taskListItems: [
        {
          id: '',
          title: '',
          status: '',
          description: '',
          startDate: '',
          endDate: '',
          assignTo: ''
        }
      ],
      dragDivId: 0
    };
  }

  public GetParameterFromUrl(parameter) {
    parameter = parameter.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + parameter + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    return results == null ? '' : results[1];
  }

  public async componentDidMount() {
    SPComponentLoader.loadScript('/_layouts/15/init.js', {
      globalExportsName: '$_global_init'
    })
      .then((): Promise<{}> => {
        return SPComponentLoader.loadScript('/_layouts/15/MicrosoftAjax.js', {
          globalExportsName: 'Sys'
        });
      })
      .then((): Promise<{}> => {
        return SPComponentLoader.loadScript('/_layouts/15/ScriptResx.ashx?name=sp.res&culture=en-us', {
          globalExportsName: 'Sys'
        });
      })
      .then((): Promise<{}> => {
        return SPComponentLoader.loadScript('/_layouts/15/SP.Runtime.js', {
          globalExportsName: 'SP'
        });
      })
      .then((): Promise<{}> => {
        return SPComponentLoader.loadScript('/_layouts/15/SP.js', {
          globalExportsName: 'SP'
        });
      })
      .then((): Promise<{}> => {
        return SPComponentLoader.loadScript('/_layouts/15/sp.init.js', {
          globalExportsName: 'SP'
        });
      })
      .then((): Promise<{}> => {
        return SPComponentLoader.loadScript('/_layouts/15/sp.ui.dialog.js', {
          globalExportsName: 'SP'
        });
      });

    this.initialize();
  }

  private async initialize() {
    this.listInternalName = DEBUG ? 'Risk%20Action%20List' : this.GetParameterFromUrl("listTitle");

    let siteRelativeUrl = this.props.context.pageContext.web.serverRelativeUrl;
    let kanbanService = new kanbanViewService(this.props.siteurl, siteRelativeUrl);

    kanbanService.getListTitle(this.listInternalName).then((res: any) => {
      this.setState({ listTitle: res.Title });
    });

    this.setTaskStatus(kanbanService);
    this.setTaskItems(kanbanService);
  }

  public async setTaskStatus(service) {
    await service.getTaskStatus(this.listInternalName).then(async res => {
      let items = res['Choices'] || [];
      await items.forEach(element => {
        this.choiceItems.push(element);
      });
    });
    this.setState({ statusItems: this.choiceItems });
  }


  public async setTaskItems(service) {
    await service.getTaskListItems(this.listInternalName).then(async res => {
      await res.forEach(async(element: any) => {
        this.listItems.push({
          id: element['Id'],
          title: element['Title'],
          status: element['Status'],
          description: element['Body'] || '',
          startDate: element['StartDate'] || '',
          endDate: element['DueDate'] || '',
          assignTo: element['AssignedTo'] == null || undefined ? '' : element['AssignedTo'][0]['Title'],
          order: element['metKanbanOrder']
        });
      });
    });
    this.setState({ taskListItems: this.listItems });

    setTimeout(() => {
      var draggableElements = document.querySelectorAll(".draggable");
      for (let i = 0; i < draggableElements.length; i++) {
        let elementDrag = draggableElements[i];        
        elementDrag.addEventListener('dragstart', function (e: any) {
          e.dataTransfer.setData('text/html', this.innerHTML);
        });
      }
    }, 3000);

  }

  public getItemsByStatus(statusName: string): any[] {
    let items = this.state.taskListItems.filter((rec: any) => rec.status == statusName) || [];
    items.sort((a, b) => parseInt(a.order) - parseInt(b.order));
    return items;
  }

  /// Open new task item
  public openTaskItem(id: any) {
    var callback = this.CloseItemCallback.bind(this, id);
    let options: SP.UI.IDialogOptions = {
      url: this.props.siteurl + (id == 0 ? "/Lists/" + this.listInternalName + "/NewForm.aspx?IsDlg=1"
        : "/Lists/" + this.listInternalName + "/EditForm.aspx?ID=" + id),
      dialogReturnValueCallback: () => {
        callback();
      },
      allowMaximize: false,
      showClose: true,
      width: 600,
      height: 700
    };
    SP.UI.ModalDialog.showModalDialog(options);
  }

  public CloseItemCallback = (id: any) => {
    // console.log('Id', id);
    let siteRelativeUrl = this.props.context.pageContext.web.serverRelativeUrl;
    let kanbanService = new kanbanViewService(this.props.siteurl, siteRelativeUrl);


    if (id == 0) {
      // console.log('Add item');
      this.setTaskItems(kanbanService);
    }
    else {
      // console.log('Update item');
      kanbanService.getTaskListItemById(this.listInternalName, id).then((taskItem) => {

        // console.log('taskItem', taskItem);
        //   let tItems = this.state.taskListItems;
        this.state.taskListItems.forEach((element: any) => {
          if (element.id == id) {
            element.title = taskItem.Title;
            element.status = taskItem.Status;
            element.description = taskItem.Body || '';
            element.startDate = taskItem.StartDate || '';
            element.endDate = taskItem.DueDate || '';
            // element.assignTo = taskItem.AssignedTo == null || undefined ? '' : taskItem.AssignedTo[0]['Title'];
          }
        });
        this.setState({
          taskListItems: this.state.taskListItems
        });
        //  let stateTaskItem = tItems.filter((rec: any) => rec.id == id);

        // console.log('stateTaskItem', stateTaskItem);
        // if (stateTaskItem.length > 0) {
        //   let item = stateTaskItem[0];

        //   console.log('item', item);
        //   console.log('State Task Item Title', item.title);
        //   console.log('Task Item Title', taskItem.Title);

        //   item.title = taskItem.Title
        //   item.status = taskItem.Status;
        //   item.description = taskItem.Body || '';
        //   item.startDate = taskItem.StartDate || '';
        //   item.endDate = taskItem.DueDate || '';
        //   // item.assignTo = taskItem.AssignedTo[0] == null || undefined ? '' : taskItem.AssignedTo[0]['Title'];



        // }
      });
    }
  }

  public selectedItemId: number;
  public onDragStart(event, id) {
    // console.log("drag start...id", id);
    this.selectedItemId = id;
    event.dataTransfer.setData("id", id);
  }

  public onDragOver(event) {
    // console.log("on drag over", event);
    event.stopPropagation();
    event.preventDefault();
    // event.dataTransfer.dropEffect = "move"
  }

  public onDragOverOnCard(event, itemId) {
    // console.log("on drag over on card", event, itemId);
    this.dragDivId = itemId;
    this.setState({ dragDivId: this.dragDivId });
    event.stopPropagation();
    event.preventDefault();
    // event.dataTransfer.dropEffect = "move"
  }

  public onDrop = (event, status) => {    
    // let id = event.dataTransfer.getData("id");
    // console.log("execute on drop..", this.selectedItemId, this.isDropOnCard, status);
    let order = 1;

    let items = this.getItemsByStatus(status);

    if (items.length >= 2) {
      order = items[items.length - 1].order;
    }

    this.state.taskListItems.forEach((item: any) => {
      if (item.id == this.selectedItemId) {
        item.status = status;
        item.order = order;
      }
    });

    if (this.isDropOnCard == false) {
      this.setState({ taskListItems: this.state.taskListItems });
      // update function for specific record
      this.updateStatus(status, this.selectedItemId, order);
    }
    this.isDropOnCard = false;
    this.setState({ dragDivId: 0 });
  }

  public onDropCard = async (event, itemId, order, status) => {
    //alert("card drop...");
    // console.log("card drop...", this.isDropOnCard, status);
    this.isDropOnCard = true;
    let items = this.getItemsByStatus(status);

    let isNeedOrderIncrement = false;
    let orderForSelectedCard = 0;
    await items.forEach(async (item: any) => {
      let newOrder = item.order;
      if (item.id == itemId) {
        isNeedOrderIncrement = true;
        orderForSelectedCard = newOrder;
      }
      if (isNeedOrderIncrement == true) {
        newOrder++;
        item.order = newOrder;
        await this.updateStatus(status, item.id, newOrder);
      }

    });
    this.state.taskListItems.sort((a, b) => parseInt(a.order) - parseInt(b.order));

    this.setState({ taskListItems: this.state.taskListItems });

    let previousStatus;
    this.state.taskListItems.forEach((item: any) => {
      if (item.id == this.selectedItemId) {
        previousStatus = item.status;
        item.status = status;
        item.order = orderForSelectedCard;
      }
    });
    this.setState({ taskListItems: this.state.taskListItems });
    this.updateStatus(status, this.selectedItemId, orderForSelectedCard);
    this.setState({ dragDivId: 0 });

    /*
    let itemsForPreviousStatus = this.getItemsByStatus(previousStatus);
    let newOrderPrvStatus = 1;
    itemsForPreviousStatus.forEach((item: any) => {
      item.order = newOrderPrvStatus;
      this.updateStatus("", item.id, newOrderPrvStatus);
      newOrderPrvStatus++;
    });*/
    //this.setState({ taskListItems: this.state.taskListItems });
  }

  public async updateStatus(status: any, id: any, order?: any) {
    let siteRelativeUrl = this.props.context.pageContext.web.serverRelativeUrl;
    let kanbanService = new kanbanViewService(this.props.siteurl, siteRelativeUrl);
    let percentCompleted: any = status == strings.QueryTaskStatusNotStarted ? 0 : (status == strings.QueryTaskStatusCompleted ? 1 : 0.5);
    await kanbanService.updateStatus(this.listInternalName, status, id, order, percentCompleted);
  }

  public backToList() {
    window.location.href = this.props.siteurl + "/Lists/" + this.listInternalName;
  }

  public render(): React.ReactElement<IWpKanbanViewProps> {
    let content: any = '';

    content = this.state.statusItems.map((status, key) => {
      return (<div key={key} className={[styles.csBox, "droppable"].join(' ')}
        onDragOver={(e) => this.onDragOver(e)}
        onDrop={(e) => this.onDrop(e, status)}>
        <div className={styles.csBoxHeading}>
          <h3>{status}</h3>
          {key == 0 ?
            <button type="button" className={"btn btn-info " + styles.newBtn} onClick={this.openTaskItem.bind(this, 0)}>{strings.ButtonTextNew}</button>
            : ''}
        </div>
        {
          this.getItemsByStatus(status).map((item: any, key1: any) => {
            let dueDateClass = '';
            if (item.endDate != null) {
              var today = new Date();
              today.setHours(0, 0, 0, 0);
              var dueDate = new Date(item.endDate);
              dueDate.setHours(0, 0, 0, 0);

              if (dueDate.getTime() < today.getTime()) { //if we are past the due date, and the task is not completed yet
                dueDateClass = styles.datedanger;
              }
            }

            return (<div key={key + key1} id={item.id} onDoubleClick={this.openTaskItem.bind(this, item.id)}
              onDragOver={(evt) => this.onDragOverOnCard(evt, item.id)}
              onDrop={(evt) => this.onDropCard(evt, item.id, item, status)}
              className={[styles.csBody, "draggable", item.id == this.state.dragDivId ? styles.dragOverClass : ""].join(' ')}
              draggable onDragStart={(e) => this.onDragStart(e, item.id)}>
              <div className={styles.csItem}>
                <h4 className={styles.clickable} onClick={this.openTaskItem.bind(this, item.id)}>{item.title}</h4>
                <div>{ReactHtmlParser(item.description)}</div>
                <table>
                  <tbody>
                    <tr className={styles.highlightRow}>
                      <td>{strings.CardLabelAssignTo} :</td>
                      <td>{item.assignTo}</td>
                    </tr>
                    <tr>
                      <td>{strings.CardLabelStartDate} :</td>
                      <td>
                        {item.startDate == '' ? '-' : <Moment format="D MMM YYYY">{item.startDate || null}</Moment>}
                      </td>
                    </tr>
                    <tr>
                      <td>{strings.CardLabelEndDate} :</td>
                      <td>
                        <span className={dueDateClass}>{item.endDate == '' ? '-' : <Moment format="D MMM YYYY">{item.endDate || null}</Moment>}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>);
          })
        }
      </div>);
    });

    return (
      <div className={["container", "container-drag", styles.wpKanbanView].join(' ')} >
        <div className={styles.leftSpace}>
          <div className={styles.heading}>{this.props.wpTitle} - {this.state.listTitle}
            <button type="button" className={styles.btnBackButton} onClick={this.backToList.bind(this)}><i className="fa fa-chevron-left" aria-hidden="true"></i> {strings.ButtonTextBack}</button>
          </div>
          <div className={styles.columnWrap + " row"} >
            {content}
          </div>
        </div>
      </div>
    );
  }
}
