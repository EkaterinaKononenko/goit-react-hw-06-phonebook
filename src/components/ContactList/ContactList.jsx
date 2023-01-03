import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';
import { ContactListWrap } from './ContactList.styled';
import { useSelector} from 'react-redux';



export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

 const filteredContacts = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase().trim())
      )
    : contacts;
  
  return (
    <ContactListWrap>
      {filteredContacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
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
};
