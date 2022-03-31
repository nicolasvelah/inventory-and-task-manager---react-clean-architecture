import { message } from 'antd';
import { useEffect, useState } from 'react';
import { repository } from '../../../../dependecy-injection';
import Task from '../../../../domain/models/task';
import { userGlobalContext } from '../../../context/global/UserGlobalContext';
import { useTaskContext } from '../../../context/task/TaskContext';
import {
  DataHeaderTask,
  GroupTasks,
  UseTaskBoardContainerState
} from './useTaskBoardContainerState.interfaces';

const useTaskBoardContainerState: UseTaskBoardContainerState = () => {
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [groupTasks, setGroupTasks] = useState<GroupTasks>({
    arrived: [],
    closed: [],
    toRun: []
  });

  const { user } = userGlobalContext();
  const { activeTask, setActiveTask } = useTaskContext();

  const { tasksRepository } = repository;

  const getTasks = async () => {
    const hide = message.loading('Obteniendo tareas ...');
    try {
      const tasksResponse = await tasksRepository!.getAllByIdUser(user!._id!);
      setTasks(tasksResponse);

      const arrivedTasks: Task[] = [];
      const closedTasks: Task[] = [];
      const toRunTasks: Task[] = [];

      tasksResponse.forEach((taskItem) => {
        if (taskItem.closedDate) {
          closedTasks.push(taskItem);
        } else if (taskItem.arrivalDate) {
          arrivedTasks.push(taskItem);
        } else {
          toRunTasks.push(taskItem);
        }
      });

      setGroupTasks({
        arrived: arrivedTasks,
        closed: closedTasks,
        toRun: toRunTasks
      });
    } catch (error) {
      message.error('No se pudo obtener las tareas');
    } finally {
      hide();
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    if (activeTask && !visibleDrawer) {
      setVisibleDrawer(true);
    }
  }, [activeTask, visibleDrawer]);

  const onCloseDrawer = () => {
    setVisibleDrawer(false);
    setActiveTask(null);
  };

  const getStateTask = (task: Task | null): DataHeaderTask | null => {
    if (!task) return null;
    if (task.closedDate) {
      return { title: 'Cerrado', color: 'red' };
    }
    if (task.arrivalDate) {
      return { title: 'Arrivo', color: 'orange' };
    }
    return { title: 'Por ejecutar', color: 'green' };
  };

  const activeTaskState = getStateTask(activeTask);

  return {
    tasks,
    groupTasks,
    activeTaskState,
    activeTask,
    visibleDrawer,
    actions: {
      onCloseDrawer
    }
  };
};

export default useTaskBoardContainerState;
