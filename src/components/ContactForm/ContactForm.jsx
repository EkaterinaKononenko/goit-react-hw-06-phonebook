import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { customAlphabet } from 'nanoid';
import PropTypes from 'prop-types';
import {
  Input,
  FormReg,
  LabelForm,
  Error,
  BtnAddContact,
} from './ContactForm.styled';

const nanoid = customAlphabet('1234567890abcdef', 10);

let phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
let nameRegExp = /[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameRegExp,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initualValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    onSubmit(newContact);
    resetForm();
  };
  return (
    <Formik
      initialValues={initualValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormReg autoComplete="off">
        <LabelForm htmlFor="name">
          Name
          <Input type="text" name="name" />
          <Error name="name" component="div" />
        </LabelForm>
        <LabelForm htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <Error name="number" component="div" />
        </LabelForm>
        <BtnAddContact type="submit">Add contact</BtnAddContact>
      </FormReg>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
