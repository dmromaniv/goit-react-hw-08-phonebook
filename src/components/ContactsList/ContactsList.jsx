import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { ContactItem } from 'components/ContactItem/ContactItem';
import s from './ContactsList.module.css';

import { fetchContacts } from 'redux/contacts/contactsOperations';
import {
  selectContacts,
  selectFilteredContacts,
  selectLoadingStatus,
} from 'redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoadingStatus);
  const userToken = useSelector(state => state.auth.token);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, contacts.length, userToken]);

  return (
    <>
      {isLoading && <div>Loading contacts...</div>}
      {filteredContacts ? (
        <ul className={s.list}>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      ) : (
        <p>Sorry, we didn't find any contact</p>
      )}
    </>
  );
};
