import {createBrowserRouter} from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import MainLayout from '../layouts/MainLayouts/MainLayout';
import AccountPage from '../pages/AccountPage/AccountPage';

const config = [
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path: "/",
          element: <MainPage/>,
        },
        {
          path: "account",
          element: <AccountPage/>,
        },
      ]
    },
]

export const router = createBrowserRouter(config, {basename: ''});