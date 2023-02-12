import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute() {
  const token = useSelector(state => state.auth.token);
  return !token ? <Outlet /> : <Navigate to="/contacts" />;
}

export default PublicRoute;
