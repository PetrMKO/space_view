import {Button} from '../../../components/Button/Button';
import {buttonFragment} from '../styled';
import styled from 'styled-components';
import {AuthTypes} from '../types';
import {FC} from 'react';

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

type Props = {
  setType: (type: AuthTypes) => void
}

const AuthTypeSelector:FC<Props> = ({setType}) => {

  return (
    <SelectorWrapper>
      <Button fragment={buttonFragment} onClick={()=>setType('signIn')}>
        Sign in
      </Button>

      <Button fragment={buttonFragment} onClick={()=>setType('logIn')}>
        Log in
      </Button>
    </SelectorWrapper>
  );
};

export default AuthTypeSelector;