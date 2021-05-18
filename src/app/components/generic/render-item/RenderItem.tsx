/* eslint-disable react/jsx-one-expression-per-line */
import React, { FunctionComponent } from 'react';
import './render-item.scss';

const RenderItem: FunctionComponent<{ label: string; value: string }> = ({ label, value }) => (
  <p className="render-item">
    <b>{label}:</b> <span>{value}</span>
  </p>
);

export default RenderItem;
