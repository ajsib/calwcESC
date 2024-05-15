export interface BucketTeamSelectorProps {
    teams: string[];
    onTeamSelect: (team: string) => void;
    showDropdown: boolean;
    setShowDropdown: () => void;
    currentTeam: string;
  }