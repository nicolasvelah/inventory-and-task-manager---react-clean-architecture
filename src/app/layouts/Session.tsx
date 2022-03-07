/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { LoadingOutlined } from '@ant-design/icons';
import { Result } from 'antd';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import DependecyInjection from '../../dependecy-injection';
import { userGlobalContext } from '../context/global/UserGlobalContext';
// import SocketClient from '../../helpers/socket-client';

const Session: FunctionComponent<{ children: React.ReactNode }> = ({
  children
}) => {
  const [checkSigned, setCheckSigned] = useState<boolean>(false);

  const { apiRepository, firebaseAdminRepository } =
    DependecyInjection.getInstance();

  const { setUser } = userGlobalContext();

  const history = useHistory();
  const location = useLocation();

  const verifySession = async () => {
    const stateSession = await firebaseAdminRepository!.currentSessionState();

    if (!stateSession) {
      setUser(null);
      if (!location.pathname.includes('public')) {
        history.push('/login');
      }

      setCheckSigned(true);
      return;
    }

    const userResp = await apiRepository!.getUserById(stateSession.uid);
    if (!userResp) {
      await firebaseAdminRepository!.signOut();
      setUser(null);
      history.push('/login');
      setCheckSigned(true);
      return;
    }

    setUser(userResp);
    setCheckSigned(true);
    if (location.pathname === '/login') history.push('/task/list');
  };

  useEffect(() => {
    verifySession();
  }, []);

  if (!checkSigned) {
    return (
      <Result
        icon={<LoadingOutlined />}
        title="Cargando ..."
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      />
    );
  }
  return <>{children}</>;
};

export default Session;
