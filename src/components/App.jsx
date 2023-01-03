
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Container, PhoneTitle, ContactTitle, IconWrapper } from './App.styled';
import { AiOutlineApple } from 'react-icons/ai';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';



  export default function App() {
      return (
        <Container>
          <IconWrapper>
            <PhoneTitle>Phonebook</PhoneTitle>
            <AiOutlineApple color="#D71868" fontSize="3em" />
          </IconWrapper>
          <ContactForm />
          <IconWrapper>
            <ContactTitle>Contacts</ContactTitle>
            <AiOutlineUsergroupAdd color="#D71868" fontSize="3em" />
          </IconWrapper>
          <Filter  />
          <ContactList />
        </Container>
      );
    }

