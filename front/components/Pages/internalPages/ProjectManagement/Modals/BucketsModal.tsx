/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import Modal from './Modal'; // Reusing the Modal component
import { css } from '@emotion/react';

const formStyle = css`
  display: flex;
  flex-direction: column;
`;

const inputStyle = css`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
`;

const buttonStyle = css`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #4287f5;
  color: white;
  cursor: pointer;
`;

const listItemStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ManageTeamsModal: React.FC<{
  isOpen: boolean,
  close: () => void,
  teams: string[],
  addTeam: (teamName: string) => void,
  deleteTeam: (teamName: string) => void
}> = ({ isOpen, close, teams, addTeam, deleteTeam }) => {
  const [newTeam, setNewTeam] = useState('');

  const handleAddTeam = () => {
    if (newTeam && !teams.includes(newTeam)) {
      addTeam(newTeam);
      setNewTeam('');
    }
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <form css={formStyle} onSubmit={e => e.preventDefault()}>
        <input
          css={inputStyle}
          type="text"
          placeholder="New team name"
          value={newTeam}
          onChange={(e) => setNewTeam(e.target.value)}
        />
        <button css={buttonStyle} onClick={handleAddTeam}>Add Team</button>
      </form>
      <div>
        {teams.map(team => (
          <div key={team} css={listItemStyle}>
            <span>{team}</span>
            <button css={buttonStyle} onClick={() => deleteTeam(team)}>Delete</button>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ManageTeamsModal;
