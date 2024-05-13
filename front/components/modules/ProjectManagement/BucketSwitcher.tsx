/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import DropDownIcon from '@/components/UI/icons/DropDown';

interface BucketTeamSelectorProps {
  currentTeam?: string;
  teams?: string[];
  onTeamSelect: (team: string) => void;
}


const selectorContainerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
  margin-bottom: 3rem;
`;

const titleStyle = css`
  font-size: 1.8rem;
  font-weight: bold;
`;

const dropdownContainerStyle = css`
  position: relative;
`;

const dropdownStyle = css`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const dropdownText = css`
  font-family: PT Serif;
  user-select: none;
  margin-right: 0.5rem;
`;

const dropdownContentStyle = css`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
  width: max-content;
`;

const dropdownItemStyle = css`
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const BucketTeamSelector: React.FC<BucketTeamSelectorProps> = ({ currentTeam, teams, onTeamSelect }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const mockTeams: string[] = teams || ['Development Team', 'Marketing Team', 'Design Team', 'All'];

  const handleTeamSelect = (team: string) => {
    onTeamSelect(team);
    setShowDropdown(false);
  };

  return (
    <div css={[selectorContainerStyle]}>
      <div css={titleStyle}>{currentTeam}</div>
      <div css={dropdownContainerStyle}>
        <div css={dropdownStyle} onClick={() => setShowDropdown(!showDropdown)}>
          <span css={dropdownText}>{currentTeam ? currentTeam : 'Choose Team'}</span>
          <DropDownIcon />
        </div>
        {showDropdown && (
          <div css={dropdownContentStyle}>
            {mockTeams.map((team) => (
              <div key={team} css={dropdownItemStyle} onClick={() => handleTeamSelect(team)}>
                {team}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BucketTeamSelector;
