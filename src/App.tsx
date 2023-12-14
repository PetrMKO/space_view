import React, {useState} from 'react';
import {RouterProvider} from 'react-router-dom';
import {router} from './router/config';
import {ThemeProvider} from 'styled-components';
import {lightTheme} from './theme/lightTheme';
import {AuthContext} from './context/authContext';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const authContext = {
    isAuth: isAuth,
    setIsAuth: setIsAuth
  }

  return (
    <AuthContext.Provider value={authContext}>
      <ThemeProvider theme={lightTheme}>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </AuthContext.Provider>
  )
}

export default App;
