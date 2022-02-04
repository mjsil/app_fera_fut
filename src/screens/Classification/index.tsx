import React, { useContext, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { HootContext } from '../../context/HootContext';
import { TeamCard, TeamCardProps } from '../../components/TeamCard';

import {
  Container, Header, Title, HeaderClassification, LeftInformations,
  Label, BackButton, Icon, LoadContainer, ClassificationList, Separator
} from './styles';

export const ClassificationScreen = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const state = useContext(HootContext);
  const leagueStandings = state?.leagueStandings;
  const classification = state?.classification;
  const isLoading = state?.isLoadingClassification;
  const selectedLeague = state?.selectedLeague;
  const selectedSeason = state?.selectedSeason;
  const setSelectedTeam = state?.setSelectedTeam;

  useEffect(() => {
    if(!leagueStandings) return;

    leagueStandings(
      Number(selectedLeague?.league.id),
      Number(selectedSeason?.year)
    );
  }, []);

  const handleNavigationGoBack = () => {
    navigation.goBack();
  }

  const handleNavigationGoTeam = (team: TeamCardProps) => {
    if(!!setSelectedTeam) {
      setSelectedTeam(team);
    }

    navigation.navigate({ name: 'TeamScreen' } as any);
  }

  return (
    <Container>
      <Header>
        <BackButton
          onPress={() => handleNavigationGoBack()}
        >
          <Icon name='arrowleft' />
        </BackButton>
        <Title>Tabela</Title>
      </Header>

      <HeaderClassification>
        <LeftInformations>
          <Label>JG</Label>
          <Label>VT</Label>
          <Label>SG</Label>
          <Label>PT</Label>
        </LeftInformations>
      </HeaderClassification>

      { isLoading
        ? (
          <LoadContainer>
            <ActivityIndicator size='large' color={theme.colors.text} />
          </LoadContainer>
        )
        : (
          <ClassificationList<any>
            data={classification}
            keyExtractor={(item: TeamCardProps) => item.team.id}
            renderItem={({item}: {item: TeamCardProps}) => (
              <TeamCard
                data={item}
                onPress={() => handleNavigationGoTeam(item)}
              />
            )}

            ItemSeparatorComponent={() => <Separator />}
          />
        )
      }
    </Container>
  );
};
