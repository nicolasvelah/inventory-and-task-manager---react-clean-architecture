import React from 'react';
// import firebase from 'firebase';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import DependecyInjection from './dependecy-injection';

// import firebaseConfig from './firebase-config';

DependecyInjection.getInstance();

ReactDOM.render(<App />, document.getElementById('root'));
