import React from 'react';

import {
  Container, LeftInformations, LabelBold, Logo, Icon, Label, RightInformations
} from './styles';

interface AllTeamProps {
  played: number;
  win: number;
}

interface TeamProps {
  id: number;
  name: string;
  logo: string;
}

export interface TeamCardProps {
  rank: number;
  team: TeamProps;
  goalsDiff: number;
  points: number;
  all: AllTeamProps;
}

interface Props {
  data: TeamCardProps;
  onPress: () => void;
}

export const TeamCard = ({ data, onPress, ...rest }: Props) => {
  const { team, all } = data;

  return (
    <Container
      onPress={onPress}
      {...rest}
    >
      <LeftInformations>
        <LabelBold margin={false}>{data.rank}º</LabelBold>
        <Logo>
          <Icon source={{uri: team.logo}} resizeMode='contain' />
        </Logo>
        <Label>{team.name}</Label>
      </LeftInformations>
      <RightInformations>
        <Label >{all.played}</Label>
        <Label>{all.win}</Label>
        <Label>{data.goalsDiff}</Label>
        <LabelBold margin>{data.points}</LabelBold>
      </RightInformations>
    </Container>
  );
};
