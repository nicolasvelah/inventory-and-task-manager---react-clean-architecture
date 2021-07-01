/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import { Popover } from 'antd';
import React, { FunctionComponent } from 'react';
import Point from '../../../../../domain/models/point';
import { localDate } from '../../../../../utils/moment-utils';
import RenderItem from '../../render-item/RenderItem';

import './state-task.scss';

const anyPhoto = 'https://i.pinimg.com/736x/48/cd/30/48cd30da0700a8f99fa97ac4cf652278.jpg';

const StateTask: FunctionComponent<{
  state: 'arrivo' | 'cierre';
  date?: string;
  photo?: string;
  coordinates?: Point;
}> = ({ state, date, photo, coordinates }) => {
  const renderContentPopover = photo ? (
    <img alt="photo_" src={anyPhoto} style={{ width: 300 }} />
  ) : undefined;

  return (
    <div style={{ display: coordinates ? 'block' : 'none' }} className="state-task">
      {date && (
        <div>
          <RenderItem label={`Fecha de ${state}`} value={localDate(date)} />
        </div>
      )}

      <div className="container-assets">
        <div className="photo">
          <div>{`Foto de ${state}`}</div>
          <div className="photo-img">
            <Popover placement="left" content={renderContentPopover} trigger="click" zIndex={1000}>
              <img alt="photo_" src={anyPhoto} />
            </Popover>
          </div>
        </div>
        <div className="point">
          <div>{`Punto de ${state}`}</div>
          <div className="point-map">{coordinates?.type}</div>
        </div>
      </div>
    </div>
  );
};

export default StateTask;
