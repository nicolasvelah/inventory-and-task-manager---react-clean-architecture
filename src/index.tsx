import React from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';

import firebaseConfig from './firebase-config';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
