import { useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, TextField } from '@mui/material';

import { selectContacts } from 'redux/selectors';
import { addContact } from '../../redux/contacts/contactsOperations';
import s from './ContactForm.module.css';

export const ContactForm = memo(() => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [userInfo, setUserInfo] = useState({ name: '', number: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setUserInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const resetForm = () => {
    setUserInfo({ name: '', number: '' });
  };

  const handleContactFormSubmit = event => {
    event.preventDefault();

    const contactExists = contacts.find(
      contact => contact.name.toUpperCase() === userInfo.name.toUpperCase()
    );

    if (contactExists) {
      alert(`${userInfo.name} is already in contacts`);
    } else {
      dispatch(addContact(userInfo));
      resetForm();
    }
  };

  return (
    <form className={s.form} onSubmit={handleContactFormSubmit}>
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        value={userInfo.name}
        onChange={handleChange}
        name="name"
        required
      />
      <TextField
        id="standard-basic"
        label="Number"
        variant="standard"
        value={userInfo.number}
        onChange={handleChange}
        name="number"
        required
      />

      <Button variant="outlined" type="submit">
        Add contact
      </Button>
    </form>
  );
});
