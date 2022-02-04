import React, { createContext, FC } from 'react';

import { useLeague, DataLeagueProps, DataSeasonProps } from './hooks/useLeague';
import { useClassification } from './hooks/useClassification';
import { TeamCardProps } from '../components/TeamCard'
import { useTeam, DataTeamProps } from './hooks/useTeam';

interface ContextInterface {
  leagues: Array<DataLeagueProps>;
  selectedLeague: DataLeagueProps;
  setSelectedLeague: (selectedLeague: DataLeagueProps) => void;
  selectedSeason: DataSeasonProps;
  setSelectedSeason: (selectedSeason: DataSeasonProps) => void;
  isLoadingLeague: boolean;

  classification: Array<TeamCardProps>;
  isLoadingClassification: boolean;
  leagueStandings: (league: number, season: number) => void;
  selectedTeam: TeamCardProps;
  setSelectedTeam: (selectedTeam: TeamCardProps) => void;

  team: DataTeamProps;
  isLoadingTeam: boolean;
  teamInformation: (team: number) => void;
}

export const HootContext = createContext<ContextInterface | null>(null);

export const HootProvider: FC = ({ children }) => {
  const {
    leagues,
    selectedLeague, setSelectedLeague,
    selectedSeason, setSelectedSeason,
    isLoadingLeague
  } = useLeague();

  const {
    classification,
    isLoadingClassification,
    leagueStandings,
    selectedTeam, setSelectedTeam
  } = useClassification();

  const {
    team,
    isLoadingTeam,
    teamInformation
  } = useTeam();

  return (
    <HootContext.Provider value={{
      leagues,
      selectedLeague, setSelectedLeague,
      selectedSeason, setSelectedSeason,
      isLoadingLeague,

      classification,
      isLoadingClassification,
      leagueStandings,
      selectedTeam, setSelectedTeam,

      team,
      isLoadingTeam,
      teamInformation
    }}>
      {children}
    </HootContext.Provider>
  );
};
