import Form from './Form/Form';
import React, {useContext} from 'react';
import {AuthContext} from '../../../context/authContext';

const LogIn = () => {
  const {setIsAuth} = useContext(AuthContext)

  const onSubmit = () =>{
    setIsAuth(true)
  }

  return (
    <Form title={'Log In'} onSubmitClick={onSubmit}/>
  );
};

export default LogIn;