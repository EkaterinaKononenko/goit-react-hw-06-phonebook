import styled from 'styled-components';

export const FilterLable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilterInput = styled.input`
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

export const FilterWrap = styled.div`
  color: ${props => props.theme.colors.border};
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.heading};
`;

export const PhoneTitle = styled.h1`
heading`;
