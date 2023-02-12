import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { deleteContact } from '../../redux/contacts/contactsOperations.js';
import s from './ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteBtnClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.listItem}>
      <span className={s.textName}>{name}</span> →
      <span className={s.textPhone}>{number}</span>
      <IconButton
        aria-label="delete"
        onClick={onDeleteBtnClick}
        color="primary"
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
