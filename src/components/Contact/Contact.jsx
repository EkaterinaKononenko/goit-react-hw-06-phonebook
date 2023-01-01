import PropTypes from 'prop-types';
import { ContactText, ContactButton } from './Contact.styled';

export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <ContactText>
      {name}: {number}{' '}
      <ContactButton onClick={() => onDelete(id)}>Delete</ContactButton>
    </ContactText>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
