/* eslint-disable react/prop-types */
import React, { FunctionComponent, useEffect } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import firebaseConfig from '../../firebase-config';

const Session: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const history = useHistory();
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        // console.log('User is signed in. -->', user);
      } else {
        // No user is signed in.
        // console.log('usNo user is signed in.er');
        history.push('/login');
      }
    });
  }, []);
  return <>{children}</>;
};

export default Session;
