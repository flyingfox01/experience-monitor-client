import React, { useEffect } from 'react';
import Footer from '@/components/Footer';
import Logo from '@root/';
import LoginForm from './form';
import LoginBanner from './banner';
import './index.less';

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
        <div className={styles['logo-text']}>Arco Design Pro</div>
      </div>
      <div className={styles.banner}>
        <div className={styles['banner-inner']}>
          <LoginBanner />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles['content-inner']}>
          <LoginForm />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

Login.displayName = 'LoginPage';

export default Login;
