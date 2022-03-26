// eslint-disable-next-line object-curly-newline
import React, { createContext, useContext, useState } from 'react';
import Task from '../../../domain/models/task';

interface FiltersValue {
  text?: string;
  rangeDates?: {
    from: string;
    to: string;
  };
}

export interface FiltersTaskList {
  limit: number;
  pages: number;
  valuesSearch: FiltersValue;
  total: number;
  currentPage: number;
}

type TaskListContent = {
  tasks: Task[];
  // eslint-disable-next-line no-unused-vars
  setTasks: (newTasks: Task[]) => void;
  filters: FiltersTaskList;
  // eslint-disable-next-line no-unused-vars
  setFiltersList: (currentFilter: FiltersTaskList) => void;
};
const TaskListContext = createContext<TaskListContent>({
  tasks: [],
  // eslint-disable-next-line no-unused-vars
  setTasks: (newTasks: Task[]) => {},
  filters: {
    limit: 10,
    pages: 1,
    valuesSearch: {},
    total: 10,
    currentPage: 1
  },
  // eslint-disable-next-line no-unused-vars
  setFiltersList: (currentFilter: FiltersTaskList) => {}
});

export const useTaskListContext = () => useContext(TaskListContext);

export const TaskListContextProvider: React.FC = ({ children }) => {
  const [tasks, setCurrentTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<FiltersTaskList>({
    limit: 10,
    pages: 1,
    valuesSearch: {},
    total: 10,
    currentPage: 1
  });

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        setTasks: (newTasks: Task[]) => {
          setCurrentTasks(newTasks);
        },
        filters,
        setFiltersList: (currentFilter: FiltersTaskList) => {
          setFilters(currentFilter);
        }
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};
