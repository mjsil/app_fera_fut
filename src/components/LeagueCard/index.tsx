import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container, Logo, Icon, Name
} from './styles';

export interface LeagueCardProps {
  id: number;
  name: string;
  type: string;
  logo: string;
}

interface Props extends RectButtonProps {
  data: LeagueCardProps;
  onPress: () => void;
}

export const LeagueCard = ({data, onPress, ...rest}: Props) => {
  return (
    <Container
      onPress={onPress}
      {...rest}
    >
      <Logo>
        <Icon source={{uri: data.logo}} resizeMode='contain' />
      </Logo>
      <Name>{data.name}</Name>
    </Container>
  );
};
