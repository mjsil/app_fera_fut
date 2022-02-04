import React, { useContext, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { HootContext } from '../../context/HootContext';

import {
  Container, Header, Title, BackButton, Icon, LoadContainer, HeaderTeam,
  Logo, Image, Name, ContentTeam, Information, Label, Value
} from './styles';

export const TeamScreen = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const state = useContext(HootContext);
  const team = state?.team;
  const isLoading = state?.isLoadingTeam;
  const teamInformation = state?.teamInformation;
  const selectedTeam = state?.selectedTeam;

  useEffect(() => {
    if(!teamInformation) return;

    teamInformation(Number(selectedTeam?.team.id));
  }, []);

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
        <Title>Time</Title>
      </Header>

      { isLoading
        ? (
          <LoadContainer>
            <ActivityIndicator size='large' color={theme.colors.text} />
          </LoadContainer>
        )
        : (
          <>
            <HeaderTeam>
              <Logo>
                <Image source={{uri: team?.team.logo}} resizeMode='contain' />
              </Logo>
              <Name>{team?.team.name}</Name>
            </HeaderTeam>
            <ContentTeam>
              <Information>
                <Label>País:</Label>
                <Value>{team?.team.country}</Value>
              </Information>
              <Information>
                <Label>Fundado em:</Label>
                <Value>{team?.team.founded}</Value>
              </Information>
            </ContentTeam>

            <ContentTeam>
              <Information>
                <Label>Estadio:</Label>
                <Value>{team?.venue.name}</Value>
              </Information>
              <Information>
                <Label>Cidade:</Label>
                <Value>{team?.venue.city}</Value>
              </Information>
              <Information>
                <Label>Endereço:</Label>
                <Value>{team?.venue.address}</Value>
              </Information>
              <Information>
                <Label>Capacidade:</Label>
                <Value>{team?.venue.capacity}</Value>
              </Information>
            </ContentTeam>
          </>
        )
      }
    </Container>
  );
};
