import { Navigate, Route, Routes } from 'react-router-dom';

import Register from 'pages/Register';
import Login from 'pages/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/user/userOperations';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Contacts from '../pages/Contacts/Contacts';

export const App = () => {
  const dispatch = useDispatch();
  const userToken = useSelector(state => state.auth.token);
  const { name, email } = useSelector(state => state.user);

  useEffect(() => {
    if (userToken && !name && !email) {
      dispatch(getUser());
    }
  }, [userToken, name, email, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
