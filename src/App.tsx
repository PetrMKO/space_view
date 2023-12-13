import React, {useState} from 'react';
import {RouterProvider} from 'react-router-dom';
import {router} from './router/config';
import MainLayout from './layouts/MainLayouts/MainLayout';
import {ThemeProvider} from 'styled-components';
import {lightTheme} from './theme/lightTheme';
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
  const [isAuth] = useState();

  return (<ThemeProvider theme={lightTheme}>
    <MainLayout>
      {isAuth ?
        <RouterProvider router={router}/> :
        <AuthPage/>}
    </MainLayout>)
  </ThemeProvider>)
}

export default App;
