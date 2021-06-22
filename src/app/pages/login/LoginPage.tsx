import React from 'react';
import Login from '../../components/login/Login';
// import Session from '../../layouts/Session';

import './login-page.scss';

const LoginPage = () => {
  return (
    <div id="login-page">
      <div className="login-page-card">
        <div className="login-page-logo">
          <div style={{ fontSize: 50, fontWeight: 500 }}>LOGO</div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
