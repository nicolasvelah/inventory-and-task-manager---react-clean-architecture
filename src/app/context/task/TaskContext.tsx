// eslint-disable-next-line object-curly-newline
import React, { createContext, useContext, useState } from 'react';
import Task from '../../../domain/models/task';

type TaskContent = {
  activeTask: Task | null;
  // eslint-disable-next-line no-unused-vars
  setActiveTask: (activeTask: Task | null) => void;
};
const ActiveTaskContext = createContext<TaskContent>({
  activeTask: null,
  // eslint-disable-next-line no-unused-vars
  setActiveTask: (activeTask: Task | null) => {}
});

export const useTaskContext = () => useContext(ActiveTaskContext);

export const TaskContextProvider: React.FC = ({ children }) => {
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  return (
    <ActiveTaskContext.Provider value={{ activeTask, setActiveTask }}>
      {children}
    </ActiveTaskContext.Provider>
  );
};
