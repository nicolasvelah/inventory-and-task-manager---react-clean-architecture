// eslint-disable-next-line object-curly-newline
import React, { createContext, useContext, useState } from 'react';
import Task from '../../../domain/models/task';

type TaskListContent = {
  tasks: Task[];
  // eslint-disable-next-line no-unused-vars
  setTasks: (newTasks: Task[]) => void;
};
const TaskListContext = createContext<TaskListContent>({
  tasks: [],
  // eslint-disable-next-line no-unused-vars
  setTasks: (newTasks: Task[]) => {}
});

export const useTaskListContext = () => useContext(TaskListContext);

export const TaskListContextProvider: React.FC = ({ children }) => {
  const [tasks, setCurrentTasks] = useState<Task[]>([]);
  return (
    <TaskListContext.Provider
      value={{
        tasks,
        setTasks: (newTasks: Task[]) => {
          setCurrentTasks(newTasks);
        }
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};
