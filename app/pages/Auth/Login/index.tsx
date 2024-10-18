import React from 'react';

import {Container, TitlePage} from './styles';
import {Button} from '@/components/Button';

export function Login() {
  return (
    <Container>
      <TitlePage>Login</TitlePage>

      <Button title="erd" onPress={() => console.log('qawqsws')} />
    </Container>
  );
}
