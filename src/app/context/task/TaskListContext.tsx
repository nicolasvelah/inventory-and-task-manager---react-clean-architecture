/* eslint-disable no-unused-vars */
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

const INIT_STATE = {
  tasks: [] as Task[],
  setTasks: (newTasks: Task[]) => {},
  filters: {
    limit: 10,
    pages: 1,
    valuesSearch: {},
    total: 10,
    currentPage: 1
  } as FiltersTaskList,
  setFiltersList: (currentFilter: FiltersTaskList) => {},
  taskSelected: null as Task | null,
  setTaskSelected: (task: Task | null) => {},
  visibleDrawer: false,
  onCloseDrawer: () => {}
};

type TaskListContent = typeof INIT_STATE;

const TaskListContext = createContext<TaskListContent>(INIT_STATE);

export const useTaskListContext = () => useContext(TaskListContext);

export const TaskListContextProvider: React.FC = ({ children }) => {
  const [tasks, setCurrentTasks] = useState<Task[]>([]);
  const [taskSelected, setCurrentTaskSelected] = useState<Task | null>(null);
  const [filters, setFilters] = useState<FiltersTaskList>({
    limit: 10,
    pages: 1,
    valuesSearch: {},
    total: 10,
    currentPage: 1
  });
  const [visibleDrawer, setVisibleDrawer] = useState(false);

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
        },
        taskSelected,
        setTaskSelected: (item: Task | null) => {
          if (item) {
            setVisibleDrawer(true);
          }
          setCurrentTaskSelected(item);
        },
        visibleDrawer,
        onCloseDrawer: () => {
          setVisibleDrawer(false);
          setCurrentTaskSelected(null);
        }
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};
