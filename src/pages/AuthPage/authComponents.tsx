import {AuthTypes} from './types';
import {ReactNode} from 'react';
import SignIn from './components/SignIn';
import LogIn from './components/LogIn';

export const authComponents: Record<AuthTypes, ReactNode> = {
  signIn: <SignIn/>,
  logIn: <LogIn/>
}