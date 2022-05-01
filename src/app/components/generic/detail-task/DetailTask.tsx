/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Popover } from 'antd';
import Task from '../../../../domain/models/task';
import BlockPopover from './block-popover/BlockPopover';
import RenderItem from '../render-item/RenderItem';

import { localDate } from '../../../../utils/moment-utils';

import './detail-task.scss';
import StateTask from './state-task/StateTask';
import { getValue } from '../../../../utils/get-value';
import DetailMap from './map/detailMap';

const DetailTask: React.FC<{ task: Task | null }> = ({ task }) => {
  if (!task) return null;

  const blockPlace = {
    contentPopover: [
      {
        label: 'Calle Principal',
        value: getValue(task.place, 'mainStreet') ?? ''
      },
      {
        label: 'Número de casa',
        value: getValue(task.place, 'addressNumber') ?? ''
      },
      {
        label: 'Colonia',
        value: getValue(task.place, 'colony') ?? ''
      },
      {
        label: 'Municipio',
        value: getValue(task.place, 'municipality') ?? ''
      },
      {
        label: 'Ciudad',
        value: getValue(task.place, 'city') ?? ''
      },
      {
        label: 'Estado',
        value: getValue(task.place, 'state') ?? ''
      },
    ],
    renderItems: [
      { label: 'Tarea', value: getValue(task.place, 'name') ?? '' },
      { label: 'Tipo', value: getValue(task.place, 'type') ?? '' }
    ]
  };

  const blockTechnical = {
    contentPopover: [
      {
        label: 'Teléfono',
        value: getValue(task.technical, 'phone') ?? ''
      },
      {
        label: 'Email',
        value: getValue(task.technical, 'email') ?? ''
      },
      {
        label: 'Rol',
        value: 'Técnico'
      },
      {
        label: 'Fecha de nacimiento',
        value: localDate(getValue(task.technical, 'dateOfBirth') ?? '')
      }
    ],
    renderItems: [
      {
        label: 'Técnico',
        value: `${getValue(task.technical, '') ?? ''} ${
          getValue(task.technical, 'lastName') ?? ''
        }`
      }
    ]
  };

  const certificatePhoto = task.certificatePhoto ? (
    <img alt="photo_" src={task.certificatePhoto} style={{ width: 300 }} />
  ) : undefined;

  const emnployeePhoto = task.emnployeePhoto ? (
    <img alt="photo_" src={task.emnployeePhoto} style={{ width: 300 }} />
  ) : undefined;

  return (
    <div className="detail-task">
      <BlockPopover block={blockPlace} />
      <div>
        <DetailMap coordinates={getValue(task.place, 'coords')} />
      </div>
      <BlockPopover block={blockTechnical} />

      <div>
        <RenderItem label="Tipo" value={task.type} />
        <RenderItem
          label="Fecha de creación"
          value={task.createdAt ? localDate(task.createdAt) : ''}
        />
        <RenderItem
          label="Fecha programada"
          value={localDate(task.scheduledDate)}
        />
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
      <div className="container-assets" style={{ display: 'flex' }}>
        {certificatePhoto ? (
          <div className="photo" style={{ marginRight: 10 }}>
            <div>Foto de Cerficado</div>
            <div className="photo-img">
              <Popover
                placement="left"
                content={certificatePhoto}
                trigger="click"
                zIndex={1000}
              >
                <img alt="photo_" style={{ width: 150 }} src={task.certificatePhoto} />
              </Popover>
            </div>
          </div>
        ) : null }
        { emnployeePhoto ? (
          <div className="photo">
            <div>Foto de Empleado</div>
            <div className="photo-img">
              <Popover
                placement="left"
                content={emnployeePhoto}
                trigger="click"
                zIndex={1000}
              >
                <img alt="photo_" style={{ width: 150 }} src={task.emnployeePhoto} />
              </Popover>
            </div>
          </div>
        ) : null }
      </div>
    </div>
  );
};

export default DetailTask;
