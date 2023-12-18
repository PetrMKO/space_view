import {Button} from '../../../components/Button/Button';
import {AuthWrapper, buttonFragment} from '../styled';
import styled from 'styled-components';
import {AuthTypes} from '../types';
import {FC} from 'react';
import {useNavigate} from 'react-router-dom';

const SelectorWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 45px;
  box-sizing: border-box;
  justify-content: center;
  margin-top: 30%;
`


const AuthTypeSelector: FC = () => {
  const navigate = useNavigate();

  return (
    <AuthWrapper>
      <SelectorWrapper>
        <Button fragment={buttonFragment} onClick={() => navigate('signup')}>
          Sign in
        </Button>

        <Button fragment={buttonFragment} onClick={() => navigate('login')}>
          Log in
        </Button>
      </SelectorWrapper>
    </AuthWrapper>
  );
};

export default AuthTypeSelector;