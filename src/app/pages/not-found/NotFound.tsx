/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Button, Result } from 'antd';

const NotFound: React.FC = () => {
  const goToInitPage = () => {
    window.history.pushState({}, '', '/login');
    window.location.reload();
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Lo siento, la página que visitaste no existe."
      extra={
        <Button onClick={goToInitPage} type="primary">
          Volver
        </Button>
      }
    />
  );
};

export default NotFound;
