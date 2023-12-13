import React from 'react';
import Form from './Form/Form';

const SignIn = () => {
  return (
    <Form title={'Sign In'} onSubmitClick={(login, password)=>console.log(login, password)}/>
  );
};

export default SignIn;