import { useState } from 'react';
import Task from '../../../../domain/models/task';
import { UseTasks } from './useTasks.interface';

const useTasks: UseTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchType, setSearchType] = useState<'range' | 'search'>('range');

  const setTaskList = (newTasks: Task[], searchTypeArg: 'range' | 'search') => {
    setSearchType(searchTypeArg);
    setTasks(newTasks);
  };

  return {
    tasks,
    searchType,
    actions: {
      setTaskList
    }
  };
};

export default useTasks;
