import {Navigate, useOutlet} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '../context/authContext';

const ProtectedRoutes = () => {
  const {user} = useContext(AuthContext)
  const outlet = useOutlet()

  return user ? outlet : <Navigate to="/auth"  replace />;
};

export default ProtectedRoutes