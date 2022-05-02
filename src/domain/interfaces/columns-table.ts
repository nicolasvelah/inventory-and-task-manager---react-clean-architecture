import { ColumnType } from 'antd/lib/table';

export type ColumnTable = ColumnType<any> & {
  isFilterableBySearch?: boolean;
};

export type ColumnsTable = ColumnTable[];
