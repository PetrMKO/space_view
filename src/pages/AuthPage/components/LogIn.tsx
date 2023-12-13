import Form from './Form/Form';
import React from 'react';

const LogIn = () => {
  return (
    <Form title={'Log In'} onSubmitClick={(login, password)=>console.log(login, password)}/>
  );
};

export default LogIn;