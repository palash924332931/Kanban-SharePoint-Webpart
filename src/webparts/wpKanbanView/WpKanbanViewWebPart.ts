import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'WpKanbanViewWebPartStrings';
import WpKanbanView from './components/WpKanbanView';
import { IWpKanbanViewProps } from './components/IWpKanbanViewProps';
import { WebPart } from '@pnp/sp';

export interface IWpKanbanViewWebPartProps {
  description: string;
  wpTitle: string;
}

export default class WpKanbanViewWebPart extends BaseClientSideWebPart<IWpKanbanViewWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IWpKanbanViewProps> = React.createElement(
      WpKanbanView,
      {
        description: this.properties.description,
        siteurl: this.context.pageContext.web.absoluteUrl,
        context: this.context,
        wpTitle: this.properties.wpTitle,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('wpTitle', {
                  label: 'WebPart Title',
                  value: ''
                }),
                // PropertyPaneTextField('description', {
                //   label: strings.DescriptionFieldLabel
                // })
              ]
            }
          ]
        }
      ]
    };
  }
}
