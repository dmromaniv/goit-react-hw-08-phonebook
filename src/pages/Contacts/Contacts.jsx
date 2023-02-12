import React from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Section } from 'components/Section/Section';
import UserMenu from 'components/UserMenu/UserMenu';
import { Filter } from '../../components/Filter/Filter';
import Container from '../../components/Container/Container';

import style from './Contacts.module.css';

function Contacts() {
  return (
    <>
      <Section>
        <UserMenu />
      </Section>

      <Section title="Phonebook">
        <Container>
          <div className={style.contentWrapper}>
            <div>
              <h4 className={style.subtitle}>[Create contacts]</h4>
              <ContactForm />

              <h4 className={style.subtitle}>[Contacts Search]</h4>
              <Filter />
            </div>
            <div className={style.contactsWrapper}>
              <h4 className={style.subtitle}>[All contacts]</h4>
              <ContactsList />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Contacts;
