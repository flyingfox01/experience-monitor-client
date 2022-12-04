import React from 'react';
import { useNavigate } from 'react-router-dom';

function Foo() {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate('/b')}>登录页面</div>
    </>
  );
}

export default Foo;
