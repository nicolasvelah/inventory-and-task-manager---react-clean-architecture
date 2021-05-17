import { Drawer } from 'antd';
import React, { useEffect, useState } from 'react';
import DependecyInjection from '../../../../dependecy-injection';
import Task from '../../../../domain/models/task';
import ColumnBoard from '../../../components/task/board/column/ColumnBoard';
import { userGlobalContext } from '../../../context/global/UserGlobalContext';
import { TaskContextProvider, taskContext } from '../../../context/task/TaskContext';
import MenuLayout from '../../../layouts/MenuLayout';

import './task-board-page.scss';

interface GroupTasks {
  toRun: Task[];
  arrived: Task[];
  closed: Task[];
}

const TaskBoardPageMain = () => {
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [groupTasks, setGroupTasks] = useState<GroupTasks>({
    arrived: [],
    closed: [],
    toRun: []
  });

  const { user } = userGlobalContext();

  const { tasksRepository } = DependecyInjection.getInstance();

  const getTasks = async () => {
    const tasksResponse = await tasksRepository.getAllByIdUser(user._id);
    console.log('tasksResponse -->', tasksResponse);
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

  const { activeTask, setActiveTask } = taskContext();

  const onCloseDrawer = () => {
    setVisibleDrawer(false);
    setActiveTask(null);
  };

  useEffect(() => {
    if (activeTask && !visibleDrawer) {
      setVisibleDrawer(true);
    }
  }, [activeTask, visibleDrawer]);

  return (
    <div className="task-board-page">
      <ColumnBoard state="Por ejecutar" tasks={groupTasks.toRun} />
      <ColumnBoard state="Arrivo" tasks={groupTasks.arrived} />
      <ColumnBoard state="Cerrada" tasks={groupTasks.closed} />
      <Drawer
        title="Multi-level drawer"
        width={520}
        closable={false}
        onClose={onCloseDrawer}
        visible={visibleDrawer}
      >
        {activeTask && (
          <div>
            <div>{tasks.length}</div>
            {activeTask._id}
          </div>
        )}
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
