import { Form, Checkbox, Input, Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import axios from 'axios';
import useStorage from '@/utils/storage';
import { useNavigate } from 'react-router-dom';

type LoginParams = {
  name: string;
  password: string;
  agree: boolean;
};

const Component: React.FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginParams, setLoginParams, removeLoginParams] = useStorage('loginParams');

  const [rememberPassword, setRememberPassword] = useState(!!loginParams);

  function afterLoginSuccess(params: LoginParams) {
    // 记住密码
    if (rememberPassword) {
      setLoginParams(JSON.stringify(params));
    } else {
      removeLoginParams();
    }
    // 记录登录状态
    localStorage.setItem('userStatus', 'login');
    // 跳转首页
    navigate('/home');
  }

  function login(params: LoginParams) {
    setErrorMessage('');
    setLoading(true);
    axios
      .post('/api/user/login', params)
      .then(res => {
        const { status, msg } = res.data;
        if (status === 'ok') {
          afterLoginSuccess(params);
        } else {
          setErrorMessage(msg || '登录出错');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const handleSubmit = (values: any) => {
    console.log('Received values of form: ', values);
    login(values);
  };

  return (
    <Form
      name='normal_login'
      className='login-form'
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
    >
      <Form.Item name='username' rules={[{ required: true, message: '用户名未填写!' }]}>
        <Input
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='请填写用户名'
        />
      </Form.Item>
      <Form.Item name='password' rules={[{ required: true, message: '密码未填写!' }]}>
        <Input
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='请填写密码'
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name='agree' valuePropName='checked' noStyle>
          <Checkbox>我已经阅读服务条款</Checkbox>
        </Form.Item>

        <a className='login-form-forgot' href=''>
          忘记密码
        </a>
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' className='login-form-button' loading={loading}>
          登录
        </Button>
        或 <a href=''>注册</a>
      </Form.Item>
      {errorMessage}
    </Form>
  );
};

export default Component;
