/* eslint-disable react/prop-types */
import React, { FunctionComponent, useEffect, useState } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

const Session: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const history = useHistory();

  const [checkSigned, setCheckSigned] = useState<boolean>(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log('User is signed in. -->', user);
        history.push('/task/list');
      } else {
        // No user is signed in.
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
