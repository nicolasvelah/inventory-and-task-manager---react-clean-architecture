import Task from '../../../../domain/models/task';

export interface GroupTasks {
  toRun: Task[];
  arrived: Task[];
  closed: Task[];
}

export interface DataHeaderTask {
  title: string;
  color: string;
}

export type UseTaskBoardContainerState = () => {
  tasks: Task[];
  groupTasks: GroupTasks;
  activeTaskState: DataHeaderTask | null;
  activeTask: Task | null;
  visibleDrawer: boolean;
  actions: {
    onCloseDrawer: () => void;
  };
};
