/* eslint-disable react/prop-types */
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import DependecyInjection from '../../dependecy-injection';
import { userGlobalContext } from '../context/global/UserGlobalContext';
// import SocketClient from '../../helpers/socket-client';

const Session: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const [checkSigned, setCheckSigned] = useState<boolean>(false);

  const { apiRepository, firebaseAdminRepository } = DependecyInjection.getInstance();

  const { setUser } = userGlobalContext();

  const history = useHistory();
  const location = useLocation();

  const verifySession = async () => {
    const stateSession = await firebaseAdminRepository.currentSessionState();
    console.log('stateSession -->', stateSession);

    if (!stateSession) {
      setUser(null);
      if (!location.pathname.includes('public')) {
        history.push('/login');
      }

      setCheckSigned(true);
      return;
    }

    const userResp = await apiRepository.getUserById(stateSession.uid);
    if (!userResp) {
      await firebaseAdminRepository.signOut();
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

  if (!checkSigned) return <div>Cargando ...</div>;
  return <>{children}</>;
};

export default Session;
