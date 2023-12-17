import React, {ChangeEventHandler, FC, useState} from 'react';
import {ErrorHint, FormWrapper, Header, LabelSpan, submitButtonFragment} from './styled';
import {Input, InputLabel} from '../../../../components/Input/Input';
import {Button} from '../../../../components/Button/Button';

type Props = {
  title: string
  onSubmitClick: (login: string, password: string) => void
  error: string
  setError: (isError: string) => void
};

const Form: FC<Props> = ({title, onSubmitClick, error, setError}) => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onLoginChange: ChangeEventHandler<HTMLInputElement> = ({target: {value}})=>{
    setError('')
    setLogin(value)
  }
  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = ({target: {value}})=> {
    setError('')
    setPassword(value)
  }


  return (
    <FormWrapper>
      <Header>
        {title}
      </Header>
      <InputLabel>
        <LabelSpan>
          Login
        </LabelSpan>
        <Input value={login} onChange={onLoginChange}/>
      </InputLabel>

      <InputLabel>
        <LabelSpan>
          Password
        </LabelSpan>
        <Input type={'password'} value={password} onChange={onPasswordChange}/>
      </InputLabel>
      <ErrorHint>
        {error}
      </ErrorHint>

      <Button fragment={submitButtonFragment} onClick={()=>onSubmitClick(login, password)}>
        Submit
      </Button>
    </FormWrapper>
  );
};

export default Form;