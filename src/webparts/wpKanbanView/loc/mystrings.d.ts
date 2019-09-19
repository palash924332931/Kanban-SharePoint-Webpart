declare interface IWpKanbanViewWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  CardLabelAssignTo: string;
  CardLabelStartDate: string;
  CardLabelEndDate: string;

  QueryTaskStatusNotStarted: string;
  QueryTaskStatusInProgress: string;
  QueryTaskStatusCompleted: string;
  QueryTaskStatusDeferred: string;
  QueryTaskStatusWaiting: string;
  ButtonTextBack: string;
  ButtonTextNew: string;
}

declare module 'WpKanbanViewWebPartStrings' {
  const strings: IWpKanbanViewWebPartStrings;
  export = strings;
}
