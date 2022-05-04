import { ColumnType } from 'antd/lib/table';

export type ColumnTable = ColumnType<any> & {
  isFilterableBySearch?: boolean;
  children?: ColumnTable[];
};

export type ColumnsTable = ColumnTable[];
