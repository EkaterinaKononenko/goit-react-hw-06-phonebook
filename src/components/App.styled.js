import styled from 'styled-components';

export const Container = styled.div`
  width: ${props => props.theme.space[9]}px;
  height: ${props => props.theme.space[11]}px;
  background: ${props => props.theme.colors.background};
  padding: ${props => props.theme.space[4]}px;
  text-align: center;
  margin: 10px auto;
  border-radius: ${props => props.theme.radii.heading};
  box-shadow: ${props => props.theme.shadows.boxShadow};
  line-height: 1.8;
`;

export const PhoneTitle = styled.h1`
  color: ${props => props.theme.colors.border};
  font-size: ${props => props.theme.fontSizes[5]}px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-right: 15px;
`;

export const ContactTitle = styled.h2`
  color: ${props => props.theme.colors.border};
  font-size: ${props => props.theme.fontSizes[4]}px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-right: 15px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
