import React, {useContext} from 'react';
import Form from './Form/Form';
import {AuthContext} from '../../../context/authContext';

const SignIn = () => {
  const {setIsAuth} = useContext(AuthContext)

  const onSubmit = () =>{
    setIsAuth(true)
  }

  return (
    <Form title={'Sign In'} onSubmitClick={onSubmit}/>
  );
};

export default SignIn;