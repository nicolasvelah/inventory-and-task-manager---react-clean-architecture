/* eslint-disable import/prefer-default-export */

export const getValue = (json: any, key: string) => {
  if (typeof json === 'string') {
    return undefined;
  }
  return json[key];
};
