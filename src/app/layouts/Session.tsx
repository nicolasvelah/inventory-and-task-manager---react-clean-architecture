/* eslint-disable react/prop-types */
import React, { FunctionComponent, useEffect, useState } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import DependecyInjection from '../../dependecy-injection';
import { userGlobalContext } from '../context/UserGlobalContext';
// import SocketClient from '../../helpers/socket-client';

const Session: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const history = useHistory();

  const [checkSigned, setCheckSigned] = useState<boolean>(false);

  const { apiRepository } = DependecyInjection.getInstance();

  const { setUser } = userGlobalContext();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (userSession) => {
      if (userSession) {
        console.log('User is signed in. -->', userSession);

        const userResp = await apiRepository.getUserById(userSession.uid);
        console.log('userResp -->', userResp);
        if (!userResp) {
          firebase
            .auth()
            .signOut()
            .then(() => {
              // Sign-out successful.
              history.push('/login');
            })
            .catch((error) => {
              // An error happened.
              console.log('Error', error.message);
              history.push('/login');
            });
        }

        setUser(userResp);
        // await SocketClient.getInstance().connect();
        // history.push('/task/list');
      } else {
        console.log('No user is signed in');
        history.push('/login');
      }
      setCheckSigned(true);
    });
    // const { firebaseAdminRepository } = DependecyInjection.getInstance();
  }, []);
  if (!checkSigned) return null;
  return <>{children}</>;
};

export default Session;
