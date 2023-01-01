import styled from 'styled-components';

export const ContactText = styled.li`
  color: ${props => props.theme.colors.border};
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.body};
`;

export const ContactButton = styled.button`
  border: ${props => props.theme.borders.light};
  border-radius: ${props => props.theme.radii.light};
  background: ${props => props.theme.colors.transparent};
  color: ${props => props.theme.colors.border};
  margin: 0 auto;
`;
