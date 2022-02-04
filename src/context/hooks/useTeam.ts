import { useState } from 'react';
import { Alert } from 'react-native';

import { api } from '../../services/api';

interface TeamProps {
  id: number;
  name: string;
  country: string;
  founded: string;
  logo: string;
}

interface VenueProps {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  image: string;
}

export interface DataTeamProps {
  team: TeamProps;
  venue: VenueProps;
}

export const useTeam = () => {
  const [team, setTeam] = useState<DataTeamProps>({} as DataTeamProps);
  const [isLoadingTeam, setIsLoadingTeam] = useState(true);

  const teamInformation = async(team: number) => {
    try {
      const { data } = await api.get(`/teams?id=${team}`);

      transformedTeamData(data.response[0] || {});
    } catch (error) {
      Alert.alert(
        'Opps :(',
        'Não consegui encontrar os dados do time, tente novamente mais tarde!'
      )
    }
  }

  const transformedTeamData = (teamInformation: DataTeamProps) => {
    const transformedData = {
      team: {
        ...teamInformation.team
      },
      venue: {
        ...teamInformation.venue,
      }
    };

    setTeam(transformedData);
    setIsLoadingTeam(false);
  }

  return {
    team,
    isLoadingTeam,
    teamInformation
  };
};
