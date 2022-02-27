import React from 'react';
import Login from '../../components/Login/Login';
import './login-page.scss';

// TODO: Put Logo
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
