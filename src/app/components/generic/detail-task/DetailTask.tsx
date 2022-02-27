/* eslint-disable react/jsx-one-expression-per-line */
import React, { FunctionComponent } from 'react';
import Task from '../../../../domain/models/task';
import BlockPopover from './block-popover/BlockPopover';
import RenderItem from '../render-item/RenderItem';

import { localDate } from '../../../../utils/moment-utils';

import './detail-task.scss';
import StateTask from './state-task/StateTask';

const DetailTask: FunctionComponent<{ task: Task | null }> = ({ task }) => {
  if (!task) return null;

  const blockPlace = {
    contentPopover: [
      {
        label: 'Calle Principal',
        value: task.place.mainStreet
      },
      {
        label: 'Número de casa',
        value: task.place.addressNumber
      },
      {
        label: 'Colonia',
        value: task.place.colony
      },
      {
        label: 'Municipio',
        value: task.place.municipality
      },
      {
        label: 'Ciudad',
        value: task.place.city
      },
      {
        label: 'Estado',
        value: task.place.state
      }
    ],
    renderItems: [
      { label: 'Tarea', value: task.place.name },
      { label: 'Tipo', value: task.place.type }
    ]
  };

  const blockTechnical = {
    contentPopover: [
      {
        label: 'Teléfono',
        value: task.technical.phone
      },
      {
        label: 'Email',
        value: task.technical.email
      },
      {
        label: 'Rol',
        value: 'Técnico'
      },
      {
        label: 'Fecha de nacimiento',
        value: localDate(task.technical.dateOfBirth)
      }
    ],
    renderItems: [{ label: 'Técnico', value: `${task.technical.name} ${task.technical.lastName}` }]
  };

  return (
    <div className="detail-task">
      <BlockPopover block={blockPlace} />

      <div style={{ backgroundColor: '#d2d2d2', width: '100%', height: 175 }} />

      <BlockPopover block={blockTechnical} />

      <div>
        <RenderItem label="Tipo" value={task.type} />
        <RenderItem
          label="Fecha de creación"
          value={task.createdAt ? localDate(task.createdAt) : ''}
        />
        <RenderItem label="Fecha programada" value={localDate(task.scheduledDate)} />
      </div>

      <StateTask
        state="arrivo"
        date={task.arrivalDate}
        photo={task.arrivalPhoto}
        coordinates={task.arrivalLatLong}
      />

      <StateTask
        state="cierre"
        date={task.closedDate}
        photo={task.closedPhoto}
        coordinates={task.closedLatLong}
      />
    </div>
  );
};

export default DetailTask;
