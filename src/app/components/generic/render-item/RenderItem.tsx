/* eslint-disable react/jsx-one-expression-per-line */
import { Button } from 'antd';
import React from 'react';
import './render-item.scss';

const RenderItem: React.FC<{
  label: string;
  value: string;
  isClickeable?: boolean;
}> = ({ label, value, isClickeable }) => (
  <p className="render-item">
    {isClickeable ? <Button type="link">{label}:</Button> : <b>{label}:</b>}{' '}
    <span>{value}</span>
  </p>
);

export default RenderItem;
