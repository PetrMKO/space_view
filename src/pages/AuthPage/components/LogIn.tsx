import Form from './Form/Form';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../../../context/authContext';
import {userApi} from '../../../API/userApi';
import {useNavigate} from 'react-router-dom';

const LogIn = () => {
  const { setUser } = useContext(AuthContext)
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()
  const onSubmit = (login: string, password: string) => {
    userApi.login(login, password)
      .then(({ data }) => {
        setUser(data)
        navigate("/")
      })
      .catch(() => {
        setError("Wrong login or password");
      });
  }

  return (
    <Form title={'Log In'} onSubmitClick={onSubmit} error={error} setError={setError}/>
  );
};

export default LogIn;