import React from 'react';
import Footer from '@/components/Footer';
import LoginForm from './form';
import LoginBanner from './banner';
import { Layout } from 'antd';
import './index.less';

const { Content, Sider } = Layout;

function Login() {
  return (
    <Layout className='container'>
      <Sider width='550' className='slider'>
        <div className='logo' />
        <div className='logo-text'>体验监控管理平台</div>
        <LoginBanner />
      </Sider>
      <Content className='content'>
        <Layout>
          <Content className='inner-content'>
            <LoginForm />
          </Content>
          <Footer />
        </Layout>
      </Content>
    </Layout>
  );
}

Login.displayName = 'LoginPage';

export default Login;
