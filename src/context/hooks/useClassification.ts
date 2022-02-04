import { useState } from 'react';
import { Alert } from 'react-native';

import { api } from '../../services/api';

import { TeamCardProps } from '../../components/TeamCard';

export const useClassification = () => {
  const [classification, setClassification] = useState<TeamCardProps[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<TeamCardProps>({} as TeamCardProps);
  const [isLoadingClassification, setIsLoadingClassification] = useState(true);

  const leagueStandings = async(league: number, season: number) => {
    try {
      const { data } = await api.get(`/standings?league=${league}&season=${season}`);
      const standings = data.response[0].league.standings;

      transformedTeamData(standings[0] || []);
    } catch (error) {
      Alert.alert(
        'Opps :(',
        'Não consegui encontrar a classificação da liga, tente novamente mais tarde!'
      )
    }
  }

  const transformedTeamData = (teamsClassification: TeamCardProps[]) => {
    const transformedData: TeamCardProps[] = [];

    teamsClassification.forEach((teamObject) => {
      transformedData.push({
        rank: teamObject.rank,
        team: teamObject.team,
        goalsDiff: teamObject.goalsDiff,
        points: teamObject.points,
        all: {
          played: teamObject.all.played,
          win: teamObject.all.win
        }
      });
    });

    setClassification(transformedData);
    setIsLoadingClassification(false);
  }

  return {
    classification,
    isLoadingClassification,
    leagueStandings,
    selectedTeam,
    setSelectedTeam
  };
};
