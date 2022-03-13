import { Drawer, Tag } from 'antd';
import React from 'react';
import ColumnBoard from '../../components/task/board/column/ColumnBoard';
import DetailTask from '../../components/generic/detail-task/DetailTask';
import useTaskBoardContainerState from './state/useTaskBoardContainerState';

const TaskBoardContainer: React.FC = () => {
  const {
    actions: { onCloseDrawer },
    activeTaskState,
    activeTask,
    groupTasks,
    visibleDrawer
  } = useTaskBoardContainerState();

  const rendertitleDrawer = () => {
    return activeTask && activeTaskState ? (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <b>{`Tarea ${activeTask._id}`}</b>
        <Tag color={activeTaskState.color}>{activeTaskState.title}</Tag>
      </div>
    ) : undefined;
  };

  return (
    <>
      <ColumnBoard state="Por ejecutar" tasks={groupTasks.toRun} />
      <ColumnBoard state="Arrivo" tasks={groupTasks.arrived} />
      <ColumnBoard state="Cerrada" tasks={groupTasks.closed} />
      <Drawer
        title={rendertitleDrawer()}
        width={520}
        closable={false}
        onClose={onCloseDrawer}
        visible={visibleDrawer}
      >
        <DetailTask task={activeTask} />
      </Drawer>
    </>
  );
};

export default TaskBoardContainer;
