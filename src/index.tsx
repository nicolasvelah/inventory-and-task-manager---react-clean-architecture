import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import DependecyInjection from './dependecy-injection';

DependecyInjection.getInstance();

ReactDOM.render(<App />, document.getElementById('root'));
