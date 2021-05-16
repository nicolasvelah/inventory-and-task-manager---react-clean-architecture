import { Drawer } from 'antd';
import React, { useEffect, useState } from 'react';
import DependecyInjection from '../../../../dependecy-injection';
import Task from '../../../../domain/models/task';
import ColumnBoard from '../../../components/task/board/column/ColumnBoard';
import { TaskContextProvider, taskContext } from '../../../context/task/TaskContext';
import MenuLayout from '../../../layouts/MenuLayout';

import './task-board-page.scss';

interface GroupTasks {
  toRun: Task[];
  arrived: Task[];
  closed: Task[];
}

/* const baseItem: Task = {
  _id: '1234',
  arrivalDate: new Date(),
  arrivalLatLong: {
    type: 'Point',
    coordinates: [0, 0]
  },
  arrivalPhoto: '',
  closedDate: new Date(),
  closedLatLong: {
    type: 'Point',
    coordinates: [0, 0]
  },
  closedPhoto: '',
  place: {
    addressNumber: 'Caupicho, 123',
    city: 'Quito',
    colony: '',
    coords: {
      type: 'Point',
      coordinates: [0, 0]
    },
    mainStreet: '',
    municipality: '',
    name: 'place',
    state: '',
    type: 'ATM'
  },
  scheduledDate: new Date(),
  technical: {
    dateOfBirth: new Date(),
    email: '',
    enabled: true,
    lastName: 'Ramirez',
    name: 'Tecnico',
    permissions: [],
    phone: '',
    role: 'technical',
    coordinator: {
      dateOfBirth: new Date(),
      email: '',
      enabled: true,
      lastName: 'Perez',
      name: 'Coodinador',
      permissions: [],
      phone: '',
      role: 'coordinator'
    }
  },
  type: 'installation'
};

const baseItem2: Task = {
  _id: '12345',
  arrivalDate: new Date(),
  arrivalLatLong: {
    type: 'Point',
    coordinates: [0, 0]
  },
  arrivalPhoto: '',
  closedDate: new Date(),
  closedLatLong: {
    type: 'Point',
    coordinates: [0, 0]
  },
  closedPhoto: '',
  place: {
    addressNumber: 'Caupicho, 123',
    city: 'Quito',
    colony: '',
    coords: {
      type: 'Point',
      coordinates: [0, 0]
    },
    mainStreet: '',
    municipality: '',
    name: 'place',
    state: '',
    type: 'ATM'
  },
  scheduledDate: new Date(),
  technical: {
    dateOfBirth: new Date(),
    email: '',
    enabled: true,
    lastName: 'Ramirez',
    name: 'Tecnico',
    permissions: [],
    phone: '',
    role: 'technical',
    coordinator: {
      dateOfBirth: new Date(),
      email: '',
      enabled: true,
      lastName: 'Perez',
      name: 'Coodinador',
      permissions: [],
      phone: '',
      role: 'coordinator'
    }
  },
  type: 'installation'
};

const baseItem3: Task = {
  _id: '123456',
  arrivalDate: new Date(),
  arrivalLatLong: {
    type: 'Point',
    coordinates: [0, 0]
  },
  arrivalPhoto: '',
  closedDate: new Date(),
  closedLatLong: {
    type: 'Point',
    coordinates: [0, 0]
  },
  closedPhoto: '',
  place: {
    addressNumber: 'Caupicho, 123',
    city: 'Quito',
    colony: '',
    coords: {
      type: 'Point',
      coordinates: [0, 0]
    },
    mainStreet: '',
    municipality: '',
    name: 'place',
    state: '',
    type: 'ATM'
  },
  scheduledDate: new Date(),
  technical: {
    dateOfBirth: new Date(),
    email: '',
    enabled: true,
    lastName: 'Ramirez',
    name: 'Tecnico',
    permissions: [],
    phone: '',
    role: 'technical',
    coordinator: {
      dateOfBirth: new Date(),
      email: '',
      enabled: true,
      lastName: 'Perez',
      name: 'Coodinador',
      permissions: [],
      phone: '',
      role: 'coordinator'
    }
  },
  type: 'installation'
}; */

const TaskBoardPageMain = () => {
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [groupTasks, setGroupTasks] = useState<GroupTasks>({
    arrived: [],
    closed: [],
    toRun: []
  });

  const { tasksRepository } = DependecyInjection.getInstance();

  const getTasks = async () => {
    const tasksResponse = await tasksRepository.getTasks();
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
