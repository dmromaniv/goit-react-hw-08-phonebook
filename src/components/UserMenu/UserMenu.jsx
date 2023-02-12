import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@mui/material';

import { logout } from 'redux/auth/authOperations';
import style from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(state => state.user.email);
  return (
    <div className={style.menuWrapper}>
      <p className={style.email}>{email}</p>
      <Button
        variant="outlined"
        size="small"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </Button>
    </div>
  );
}

export default UserMenu;
