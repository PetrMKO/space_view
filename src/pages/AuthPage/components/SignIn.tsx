import React, {useContext, useState} from 'react';
import Form from './Form/Form';
import {AuthContext} from '../../../context/authContext';
import {useNavigate} from 'react-router-dom';
import {userApi} from '../../../API/userApi';
import {AuthWrapper} from '../styled';

const SignUp = () => {
  const { setUser } = useContext(AuthContext)
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()
  const onSubmit = (login: string, password: string) => {
    userApi.register(login, password)
      .then(({ data }) => {
        setUser(data)
        navigate("/")
      })
      .catch(() => {
        setError("User with this login already exist");
      });
  }

  return (
    <AuthWrapper>
      <Form title={'Sign Up'} onSubmitClick={onSubmit} error={error} setError={setError}/>
    </AuthWrapper>

  );
};

export default SignUp;