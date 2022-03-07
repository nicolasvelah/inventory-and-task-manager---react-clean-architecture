import { Drawer, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import DependecyInjection from '../../../../dependecy-injection';
import Task from '../../../../domain/models/task';
import DetailTask from '../../../components/generic/detail-task/DetailTask';
import ColumnBoard from '../../../components/task/board/column/ColumnBoard';
import { userGlobalContext } from '../../../context/global/UserGlobalContext';
import { TaskContextProvider, taskContext } from '../../../context/task/TaskContext';
import MenuLayout from '../../../layouts/MenuLayout/MenuLayout';

import './task-board-page.scss';

interface GroupTasks {
  toRun: Task[];
  arrived: Task[];
  closed: Task[];
}

const TaskBoardPageMain = () => {
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState<Task[]>([]);
  const [groupTasks, setGroupTasks] = useState<GroupTasks>({
    arrived: [],
    closed: [],
    toRun: []
  });

  const { user } = userGlobalContext();
  const { activeTask, setActiveTask } = taskContext();

  const { tasksRepository } = DependecyInjection.getInstance();

  const getTasks = async () => {
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

  const getStateTask = (task: Task | null) => {
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

  // eslint-disable-next-line operator-linebreak
  const rendertitleDrawer =
    activeTask && activeTaskState ? (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <b>{`Tarea ${activeTask._id}`}</b>
        <Tag color={activeTaskState.color}>{activeTaskState.title}</Tag>
      </div>
    ) : undefined;

  return (
    <div className="task-board-page">
      <ColumnBoard state="Por ejecutar" tasks={groupTasks.toRun} />
      <ColumnBoard state="Arrivo" tasks={groupTasks.arrived} />
      <ColumnBoard state="Cerrada" tasks={groupTasks.closed} />
      <Drawer
        title={rendertitleDrawer}
        width={520}
        closable={false}
        onClose={onCloseDrawer}
        visible={visibleDrawer}
      >
        <DetailTask task={activeTask} />
      </Drawer>
    </div>
  );
};

const TaskBoardPage = () => {
  return (
    <MenuLayout menuItem="Tareas-Tablero">
      <TaskContextProvider>
        <TaskBoardPageMain />
      </TaskContextProvider>
    </MenuLayout>
  );
};

export default TaskBoardPage;
