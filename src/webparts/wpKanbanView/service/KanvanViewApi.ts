import { Web } from '@pnp/sp';
import "@pnp/polyfill-ie11";
import MockData from '../service/MockData';

class KanbanViewService {
    public siteUrl: string;
    public web: Web;
    public siteRelativeUrl: string;

    public constructor(siteUrl: string, siteRelativeUrl: string) {
        this.siteUrl = siteUrl;
        this.web = new Web(this.siteUrl);
        this.siteRelativeUrl = siteRelativeUrl;
    }

    public async getListTitle(listName: any): Promise<any> {          
        return this.web.getList(this.siteRelativeUrl + '/lists/' + listName).get();       
    }

    public async getTaskStatus(listName: any): Promise<any> {
        if (DEBUG) {
            await new Promise(resolve => setTimeout(resolve, 10));
            return MockData.getTaskStatus || [];
        }

        //   console.log(this.web.lists.getById("A9A1CC37-8A4F-44FD-813B-A619E3B043A0").get.get());

        return this.web.getList(this.siteRelativeUrl + '/lists/' + listName)
       // return this.web.lists.getByTitle(listName)
            .fields
            .getByInternalNameOrTitle('Status')
            .select('Choices')
            .get() || [];
    }

    public async getTaskListItemById(listName: any, id: any): Promise<any> {
        if (DEBUG) {
            await new Promise(resolve => setTimeout(resolve, 10));
            return MockData.getTaskListItems || [];
        }
        return this.web.getList(this.siteRelativeUrl + '/lists/' + listName)
            .items
            .select('Id', 'Title', 'Status', 'Body', 'StartDate', 'DueDate', "AssignedTo/Id", "AssignedTo/Title")
            .expand("AssignedTo")
            .getById(id)
            .get() || [];
    }

    public async getTaskListItems(listName: any): Promise<any> {
        if (DEBUG) {
            await new Promise(resolve => setTimeout(resolve, 10));
            return MockData.getTaskListItems || [];
        }
        return this.web.getList(this.siteRelativeUrl + '/lists/' + listName)
       // return this.web.lists.getByTitle(listName)
            .items
            .select('Id', 'Title', 'Status', 'Body', 'StartDate', 'DueDate', "AssignedTo/Id", "AssignedTo/Title", "metKanbanOrder")
            .expand("AssignedTo")
            .get() || [];
    }

    public async updateStatus(listName: any, status: any, id: any, order: any, percentCompleted: any) {        
        let obj = {} as any;
        if (order != undefined) {
            obj.metKanbanOrder = order;
        }        

        if (status != "") {
            obj.Status = status;
            obj.PercentComplete = percentCompleted;
        }
        this.web.getList(this.siteRelativeUrl + '/lists/' + listName)
        //this.web.lists.getByTitle(listName)
            .items
            .getById(id)
            .update(
                obj
            );
    }

} export default KanbanViewService;