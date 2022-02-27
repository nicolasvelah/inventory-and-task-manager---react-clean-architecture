/* eslint-disable no-unused-vars */
import Task from '../../../../domain/models/task';

interface ReturnUseTasks {
  tasks: Task[];
  searchType: 'range' | 'search';
  actions: {
    setTaskList: (newTasks: Task[], searchTypeArg: 'range' | 'search') => void;
  };
}

export type UseTasks = () => ReturnUseTasks;
