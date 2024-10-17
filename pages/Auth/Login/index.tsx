import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';

import {Container, TitlePage} from './styles';

export function Login() {
  return (
    <Container>
      <MaterialIcons name="home" size={24} color="black" />
      <TitlePage>Login</TitlePage>
    </Container>
  );
}
