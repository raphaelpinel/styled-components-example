import styled from 'styled-components';

export default styled.h1`
  font-family: ${props => props.theme.font};
  color: ${props => props.color || props.theme.color};
`;
