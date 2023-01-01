import { useState } from 'react';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Container, PhoneTitle, ContactTitle, IconWrapper } from './App.styled';
import { AiOutlineApple } from 'react-icons/ai';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { useEffect } from 'react';

const useLocalStorage = (contacts, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? defaultValue;
  });
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state));
  }, [contacts, state]);

  return [state, setState];
};

export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const onFilter = e => {
    setFilter(e.target.value);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const addContact = newContact => {
    setContacts(prevState => {
      if (prevState.find(contact => contact.name === newContact.name)) {
        alert(`${newContact.name} is already in contacts`);
        return prevState;
      }
      return [newContact, ...prevState];
    });
  };

  const contactAfterFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <IconWrapper>
        <PhoneTitle>Phonebook</PhoneTitle>
        <AiOutlineApple color="#D71868" fontSize="3em" />
      </IconWrapper>
      <ContactForm onSubmit={addContact} />
      <IconWrapper>
        <ContactTitle>Contacts</ContactTitle>
        <AiOutlineUsergroupAdd color="#D71868" fontSize="3em" />
      </IconWrapper>
      <Filter value={filter} onFilter={onFilter} />
      <ContactList
        contacts={contactAfterFilter}
        deleteContact={deleteContact}
      />
    </Container>
  );
}
