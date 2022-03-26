/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import { Timeline } from 'antd';
import moment from 'moment';
import React, { FunctionComponent } from 'react';
import Task, { TaskType } from '../../../../../domain/models/task';
import { getValue } from '../../../../../utils/get-value';
import { useTaskContext } from '../../../../context/task/TaskContext';
import RenderItem from '../../../generic/render-item/RenderItem';
import TimerCard from '../../../generic/timer/TimerCard';

import './card-task.scss';

const formatDate = 'DD/MM/YYYY HH:mm:ss';

const CardTask: FunctionComponent<{ task: Task; active: boolean }> = ({
  task,
  active
}) => {
  const { setActiveTask } = useTaskContext();

  const selectTask = () => {
    setActiveTask(task);
  };

  const renderTimerArrivalDate = task.arrivalDate ? (
    <p>
      <b>Tiempo de ejecución:</b>{' '}
      <TimerCard startDate={task.arrivalDate} endDate={task.closedDate} />
    </p>
  ) : null;

  return (
    <div className={`card-task${active ? ' active' : ''}`} onClick={selectTask}>
      <RenderItem label="Tarea" value={task._id} />
      <RenderItem
        label="Sitio"
        value={getValue(task.place, 'addressNumber') ?? ''}
      />
      <RenderItem label="Tipo" value={getValue(task.place, 'type') ?? ''} />
      <RenderItem
        label="Sitio"
        value={getValue(task.place, 'addressNumber') ?? ''}
      />
      <RenderItem
        label="Técnico"
        value={`${getValue(task.technical, 'name') ?? ''} ${
          getValue(task.technical, 'lastName') ?? ''
        }`}
      />
      <RenderItem label="Tipo" value={TaskType[task.type] ?? task.type} />

      <Timeline>
        <Timeline.Item>
          <RenderItem
            label="Fecha de creación"
            value={moment(task.createdAt).format(formatDate)}
          />
        </Timeline.Item>
        <Timeline.Item>
          <RenderItem
            label="Fecha programada"
            value={moment(task.scheduledDate).format(formatDate)}
          />
        </Timeline.Item>
        {task.arrivalDate && (
          <Timeline.Item>
            <RenderItem
              label="Fecha de arrivo"
              value={moment.utc(task.arrivalDate).format(formatDate)}
            />
            {renderTimerArrivalDate}
          </Timeline.Item>
        )}
        {task.closedDate && (
          <Timeline.Item>
            <RenderItem
              label="Fecha de cierre"
              value={moment.utc(task.closedDate).format(formatDate)}
            />
          </Timeline.Item>
        )}
      </Timeline>
    </div>
  );
};

export default CardTask;
