import React, { useContext, useCallback } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

import { HootContext } from '../../context/HootContext';
import { DataSeasonProps } from '../../context/hooks/useLeague';
import { SeasonCard } from '../../components/SeasonCard';
import { Button } from '../../components/Form/Button';

import {
  Container, Header, BackButton, Icon, TitleHeader, Seasons, HeaderSeason,
  LeftInformations, Label, Title, SeasonList, Separator, Footer
} from './styles';

export const SeasonsScreen = () => {
  const navigation = useNavigation();
  const state = useContext(HootContext);
  const seasons = state?.selectedLeague.seasons;
  const selectedSeason = state?.selectedSeason;
  const setSelectedSeason = state?.setSelectedSeason;

  useFocusEffect(useCallback(() => {
    if(!!setSelectedSeason) {
      setSelectedSeason({} as DataSeasonProps);
    }
  }, []));

  const handleSeasonSelect = (season: DataSeasonProps) => {
    if(!!setSelectedSeason) {
      setSelectedSeason(season);
    }
  }

  const handleSubmitData = () => {
    if(!selectedSeason?.id) {
      Alert.alert('Selecione uma temporada!');

      return;
    }

    navigation.navigate({ name: 'ClassificationScreen' } as any);
  }

  const handleNavigationGoBack = () => {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton
          onPress={() => handleNavigationGoBack()}
        >
          <Icon name='arrowleft' />
        </BackButton>
        <TitleHeader>Temporadas</TitleHeader>
      </Header>

      <Seasons>
        <Title>Selecione a temporada favorita</Title>

        <HeaderSeason>
          <LeftInformations>
            <Label margin>Início</Label>
            <Label margin>Fim</Label>
          </LeftInformations>
          <Label margin={false}>Temporada</Label>
        </HeaderSeason>

        <SeasonList<any>
          data={seasons}
          keyExtractor={(item: DataSeasonProps) => item.id}
          renderItem={({item}: {item: DataSeasonProps}) => (
            <SeasonCard
              data={item}
              onPress={() => handleSeasonSelect(item)}
              isActive={selectedSeason?.id === item.id}
            />
          )}

          ItemSeparatorComponent={() => <Separator />}
        />
      </Seasons>

      <Footer>
        <Button
          title='Continuar'
          onPress={() => handleSubmitData()}
        />
      </Footer>
    </Container>
  );
};
