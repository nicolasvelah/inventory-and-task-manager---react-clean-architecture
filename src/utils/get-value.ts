/* eslint-disable import/prefer-default-export */

export const getValue = (json: any, key: string) => {
  if (typeof json === 'string' || !json) {
    return undefined;
  }
  return json[key];
};
