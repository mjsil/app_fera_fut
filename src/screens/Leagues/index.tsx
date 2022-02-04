import React, { useState, useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { HootContext } from '../../context/HootContext';
import { Input } from '../../components/Form/Input';
import { LeagueCard } from '../../components/LeagueCard';
import { DataLeagueProps } from '../../context/hooks/useLeague';

import {
  Container, Header, Leagues, Title, LoadContainer, LeagueList, Separator
} from './styles';

export const LeaguesScreen = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const state = useContext(HootContext);
  const leagues = state?.leagues;
  const setSelectedLeague = state?.setSelectedLeague;
  const isLoading = state?.isLoadingLeague;
  const [filteredLeagues, setFilteredLeagues] = useState<DataLeagueProps[]>([]);

  const filterLeague = (query: string) => {
    const filteredList = leagues?.filter(leagueObject =>
      leagueObject.league.name.toLowerCase().indexOf(query.toLowerCase()) > -1
    );

    if(!!filteredList) {
      setFilteredLeagues(filteredList);
    }
  };

  const handleLeagueSelect = (league: DataLeagueProps) => {
    if(!!setSelectedLeague) {
      setSelectedLeague(league);
    }

    navigation.navigate({ name: 'SeasonsScreen' } as any);
  }

  return (
    <Container>
      <Header>
        <Input
          placeholder='Procure entre 800+ ligas'
          onChangeText={(text) => filterLeague(text)}
        />
      </Header>

      <Leagues>
        <Title>Selecione a liga favorita</Title>

          { isLoading
            ? (
              <LoadContainer>
                <ActivityIndicator size='large' color={theme.colors.text} />
              </LoadContainer>
            )
            : (
              <LeagueList<any>
                data={
                  filteredLeagues.length > 0
                    ? filteredLeagues
                    : leagues
                }
                keyExtractor={(item: DataLeagueProps) => item.league.id}
                renderItem={({item}: {item: DataLeagueProps}) => (
                  <LeagueCard
                    data={item.league}
                    onPress={() => handleLeagueSelect(item)}
                  />
                )}

                ItemSeparatorComponent={() => <Separator />}
              />
            )
          }
      </Leagues>
    </Container>
  );
};
