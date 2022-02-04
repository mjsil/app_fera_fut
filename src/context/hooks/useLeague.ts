import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';

import { api } from '../../services/api';

import { LeagueCardProps } from '../../components/LeagueCard';
import { SeasonCardProps } from '../../components/SeasonCard';

export interface DataLeagueProps {
  league: LeagueCardProps;
  seasons: Array<SeasonCardProps>;
}

export interface DataSeasonProps extends SeasonCardProps {
  id: string;
}

export const useLeague = () => {
  const [leagues, setLeagues] = useState<DataLeagueProps[]>([]);
  const [selectedLeague, setSelectedLeague] = useState<DataLeagueProps>({} as DataLeagueProps);
  const [selectedSeason, setSelectedSeason] = useState<DataSeasonProps>({} as DataSeasonProps);
  const [isLoadingLeague, setIsLoadingLeague] = useState(true);

  useEffect(() => {
    (
      async function() {
          try {
            const { data } = await api.get('/leagues');

            transformedLeagueData(data.response || []);
          } catch (error) {
            Alert.alert(
              'Opps :(',
              'Não consegui encontrar todas as ligas, tente novamente mais tarde!'
            )
          }
        }
    )();
  }, []);

  const transformedLeagueData = (allLeagues: DataLeagueProps[]) => {
    const transformedData: DataLeagueProps[] = [];

    allLeagues.forEach((leagueObject) => {
      const league = leagueObject.league;
      const transformedSeason: SeasonCardProps[] = [];

      leagueObject.seasons.forEach((seasons) => {
        const dataSeasons = {
          id: String(uuid.v4()),
          year: seasons.year,
          start: seasons.start,
          end: seasons.end
        }

        transformedSeason.push(dataSeasons);
      });

      transformedData.push({
        league,
        seasons: transformedSeason
      });
    });

    setLeagues(transformedData);
    setIsLoadingLeague(false);
  }

  return {
    leagues,
    selectedLeague, setSelectedLeague,
    selectedSeason, setSelectedSeason,
    isLoadingLeague
  };
};
