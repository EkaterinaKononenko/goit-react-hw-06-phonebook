import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';
import { ContactListWrap } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactListWrap>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={deleteContact}
          />
        );
      })}
    </ContactListWrap>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
