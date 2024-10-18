import React from 'react';

import {Container, ButtonStyled} from './styles';

interface IButtonProps {
  title: string;
  onPress(): void;
}

// disabled -> boolean
// cor de fundo
// cor de borda
export function Button({title, onPress}: IButtonProps) {
  return (
    <Container>
      <ButtonStyled title={title} onPress={onPress} />
    </Container>
  );
}
