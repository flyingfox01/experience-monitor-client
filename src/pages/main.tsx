import React from 'react';
import { useNavigate } from 'react-router-dom';

function Foo() {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate('/b')}>跳转到/b</div>
      <div onClick={() => navigate('a11')}>跳转到/a/a1/a11</div>
      <div onClick={() => navigate('../a2')}>跳转到/a/a2</div>
      <div onClick={() => navigate(-1)}>跳转到/a</div>
    </>
  );
}

export default Foo;
