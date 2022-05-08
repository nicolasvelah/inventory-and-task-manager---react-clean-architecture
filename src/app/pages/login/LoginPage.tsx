import React from 'react';
import Login from '../../components/Login/Login';
import './login-page.scss';
import { ReactComponent as Logo } from './images/logoMorado.svg';

const LoginPage = () => {
  return (
    <div id="login-page">
      <div className="login-page-card">
        <div className="login-page-logo">
          <Logo />
        </div>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
