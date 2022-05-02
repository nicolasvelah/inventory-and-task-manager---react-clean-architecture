export interface DataTaskExcel {
  key: string;
  coordinator: string;
  technical: string;
  place: string;
  scheduledDate: string;
  arrivalDate: string;
  arrivalLatLong: any;
  closedDate: string;
  closedLatLong: any;
  type: string;
  description: string;
  catalogToInstall: string;
}

export type UseExportCsv = () => {
  tasks: DataTaskExcel[];
}
