import React from 'react';

/* eslint-disable semi */
export default interface MenuItem {
  name: string;
  key: string;
  active?: boolean;
  subItems?: {
    name: string;
    url: string;
    icon?: React.ReactNode;
    key: string;
    active?: boolean;
  }[];
  icon?: React.ReactNode;
  url?: string;
}
