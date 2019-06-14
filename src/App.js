import React from 'react';
import { ThemeProvider } from 'styled-components';

import Button from './components/Button';
import Wrapper from './components/Wrapper';
import HeaderText from './components/HeaderText';

const theme = {
  font: 'Helvetica',
  color: '#008CBA',
};

export default () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <HeaderText color="salmon">I am some header text now!</HeaderText>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button>Regular</Button>
      <HeaderText>I am more header text!</HeaderText>
    </Wrapper>
  </ThemeProvider>
);
