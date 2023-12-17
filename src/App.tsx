import React, {useEffect, useState} from 'react';
import {RouterProvider} from 'react-router-dom';
import {router} from './router/config';
import {ThemeProvider} from 'styled-components';
import {lightTheme} from './theme/light';
import {AuthContext} from './context/authContext';
import {Theme} from './theme/type';
import {darkTheme} from './theme/dark';
import {User} from './API/userApi';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const authContext = {
    user,
    setUser
  }

  useEffect(() => {
    let currentHour = new Date().getHours();
    if (currentHour < 9 || currentHour > 21) {
      setTheme(darkTheme);
    }
    if (currentHour > 9 && currentHour < 21) {
      setTheme(lightTheme);
    }
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </AuthContext.Provider>
  )
}

export default App;
