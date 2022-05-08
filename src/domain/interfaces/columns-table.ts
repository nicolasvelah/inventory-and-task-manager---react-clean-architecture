/* eslint-disable no-unused-vars */
import { ColumnType } from 'antd/lib/table';

export type ColumnTable = ColumnType<any> & {
  isFilterableBySearch?: boolean;
  children?: ColumnTable[];
};

export type ColumnsTable = ColumnTable[];

export type OnClickCell = (nonClickableColumn?: boolean) => (record: any) =>
  | {
      onClick: () => void;
    }
  | undefined;

export interface PropsDataSendEmail {
  handleEditEmail: () => void;
}
export interface ArgsBuildColumnEditAndDelete {
  handleEdit: (currentData: any) => void;
  handleDelete: (id: string) => void;
  disableDeleteButton?: (record: any) => boolean;
  onClickCell?: OnClickCell;
  propsDataSendEmail?: PropsDataSendEmail;
}
