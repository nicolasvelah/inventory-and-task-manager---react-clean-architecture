import { ResponseBox } from '../../../../../domain/repositories/box-repository';

export type UseExportCsv = () => {
  boxes: ResponseBox[];
}
