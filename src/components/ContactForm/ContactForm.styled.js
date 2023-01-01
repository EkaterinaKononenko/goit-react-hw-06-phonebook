import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Input = styled(Field)`
  border: ${props => props.theme.borders.light};
  border-radius: ${props => props.theme.radii.light};
  background: ${props => props.theme.colors.transparent};
  color: ${props => props.theme.colors.border};
  outline: none;
  width: ${props => props.theme.space[8]}px;

  &:hover,
  &:focus {
    border: ${props => props.theme.borders.heading};
  }
`;

export const FormReg = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.space[2]}px; ;
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.space[2]}px;
  color: ${props => props.theme.colors.border};
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.heading};
`;

export const Error = styled(ErrorMessage)`
  color: ${props => props.theme.colors.text};
`;

export const BtnAddContact = styled.button`
  border: ${props => props.theme.borders.light};
  border-radius: ${props => props.theme.radii.light};
  background: ${props => props.theme.colors.transparent};
  color: ${props => props.theme.colors.border};
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.body};
`;
