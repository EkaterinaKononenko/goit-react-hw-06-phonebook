import { ContactText, ContactButton } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/myValue/slice';

export const Contact = ({ id, name, number}) => {
  const dispatch = useDispatch();
  return (
    <ContactText key={id}>
      {name}:<span>{number}</span>
      <ContactButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </ContactButton>
    </ContactText>
  );
};


