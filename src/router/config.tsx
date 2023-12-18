import {createBrowserRouter, RouteObject} from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import MainLayout from '../layouts/MainLayouts/MainLayout';
import AccountPage from '../pages/AccountPage/AccountPage';
import ProtectedRoutes from './ProtectedRoutes';
import AuthPage from '../pages/AuthPage/AuthPage';
import LogIn from '../pages/AuthPage/components/LogIn';
import SignUp from '../pages/AuthPage/components/SignIn';
import AuthTypeSelector from '../pages/AuthPage/components/AuthTypeSelector';
import AccessDenied from '../pages/AccessDenied/AccessDenied';

const config: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: 'auth', element: <AuthTypeSelector/>
      },
      { path: 'auth/login', element: <LogIn/> },
      { path: 'auth/signup', element: <SignUp/> },
      { path: 'denied', element: <AccessDenied/> },
      {
        element: <ProtectedRoutes/>, children: [
          {
            path: '/',
            element: <MainPage/>,
          },
          {
            path: "account",
            element: <AccountPage/>,
          },
        ]
      },
    ]
  },
]

export const router = createBrowserRouter(config, { basename: '' });