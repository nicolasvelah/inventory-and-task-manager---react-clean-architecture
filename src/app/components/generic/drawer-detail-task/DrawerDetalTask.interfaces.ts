import Task from '../../../../domain/models/task';

export interface DataHeaderTask {
  title: string;
  color: string;
}

export interface DetailTaskProps {
  activeTask: Task | null;
  onCloseDrawer: () => void;
  visibleDrawer: boolean;
}
