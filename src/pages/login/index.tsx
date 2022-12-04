import React, { useEffect } from 'react';
import Footer from '@/components/Footer';
// @ts-ignore
import Logo from '@/logo.svg';
import LoginForm from './form';
import LoginBanner from './banner';
import './index.less';

function Login() {
  return (
    <div className='container'>
      <div className='logo'>
        {/* <Logo /> */}
        <div className='logo-text'>体验监控管理平台</div>
      </div>
      <div className='banner'>
        <div className='banner-inner'>{<LoginBanner />}</div>
      </div>
      <div className='content'>
        <div className='content-inner'>{<LoginForm />}</div>
        <div className='footer'>{<Footer />}</div>
      </div>
    </div>
  );
}

Login.displayName = 'LoginPage';

export default Login;
