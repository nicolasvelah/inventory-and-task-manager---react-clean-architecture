export interface DataCatalogExcel {
  key: string;
  brand: string;
  referenceModel: string;
  typePlace: string;
  unitOfMeasurement?: string;
  categoryId?: any;
  state?: string;
  type?: string;
  createdAt: string;
  updatedAt: string;
}

export type UseExportCsv = () => {
  catalog: DataCatalogExcel[];
}
