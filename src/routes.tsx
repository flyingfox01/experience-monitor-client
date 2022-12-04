import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createStore } from 'redux';
import axios from 'axios';
import Main from './pages/main';
import Login from './pages/login';
import { checkLogin } from './utils/permission';
import rootReducer from './store/index';
import React from 'react';

const store = createStore(rootReducer);

function App() {
  function fetchUserInfo() {
    debugger;
    store.dispatch({
      type: 'update-userInfo',
      payload: { userLoading: true },
    });
    axios.get('/api/user/userInfo').then(res => {
      store.dispatch({
        type: 'update-userInfo',
        payload: { userInfo: res.data, userLoading: false },
      });
    });
  }

  useEffect(() => {
    if (checkLogin()) {
      fetchUserInfo();
    } else if (window.location.pathname.replace(/\//g, '') !== 'login') {
      window.location.pathname = '/login';
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/main' element={<Main />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
