import React, {useEffect} from 'react';
import {Wrapper} from './styled';
import {useNavigate} from 'react-router-dom';

const AccessDenied = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timeout = setTimeout(()=>{
        navigate('/auth')
    }, 2000)
    return()=>{
      clearTimeout(timeout)
    }
  }, []);

  return (
    <Wrapper>
      You do not have permission to access this page
      <br/>
      You will redirected in 2 seconds
    </Wrapper>
  );
};

export default AccessDenied;