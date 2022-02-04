import React from 'react';

import {
  Container, MoreInformation, Label, Year
} from './styles';

export interface SeasonCardProps {
  year: number;
  start: string;
  end: string;
}

interface Props {
  data: SeasonCardProps;
  onPress: () => void;
  isActive: boolean;
}

export const SeasonCard = ({ data, onPress, isActive, ...rest }: Props) => {
  const transformedSeasonDate = (date: string) => {
    return date.substring(0, 4);
  }

  return (
    <Container
      onPress={onPress}
      isActive={isActive}
      {...rest}
    >
      <MoreInformation>
        <Label>{transformedSeasonDate(data.start)}</Label>
        <Label>{transformedSeasonDate(data.end)}</Label>
      </MoreInformation>

      <Year>{data.year}</Year>
    </Container>
  );
};
