import React from 'react';
import { TextInputProps } from 'react-native';

type Props = TextInputProps;

import {
  Container, Icon, InputElement
} from './styles';

export const Input = ({...rest}: Props) => {
  return (
    <Container>
      <Icon name='search1' />
      <InputElement {...rest} />
    </Container>
  );
};
