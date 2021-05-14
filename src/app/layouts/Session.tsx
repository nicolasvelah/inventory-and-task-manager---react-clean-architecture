/* eslint-disable react/prop-types */
import React, { FunctionComponent, useEffect, useState } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import SocketClient from '../../helpers/socket-client';

const Session: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const history = useHistory();

  const [checkSigned, setCheckSigned] = useState<boolean>(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        console.log('User is signed in. -->', user);
        await SocketClient.getInstance().connect();
        history.push('/task/list');
      } else {
        console.log('No user is signed in');
        history.push('/login');
      }
      setCheckSigned(true);
    });
  }, []);
  if (!checkSigned) return null;
  return <>{children}</>;
};

export default Session;
