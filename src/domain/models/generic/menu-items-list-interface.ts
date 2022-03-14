import React from 'react';

/* eslint-disable semi */
export default interface MenuItemsList {
  name: string;
  subItems?: {
    name: string;
    url: string;
    icon?: React.ReactNode;
  }[];
  icon?: React.ReactNode;
  url?: string;
}
