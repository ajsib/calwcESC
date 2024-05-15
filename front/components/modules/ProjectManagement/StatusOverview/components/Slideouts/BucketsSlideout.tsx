/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import Modal from './Slideout';
import { css } from '@emotion/react';
import { ManageTeamsModalProps } from '../../Types';
import { useProjectManagement } from '../../../ProjectManagementContext';

const formStyle = css`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #f3f3f3;
`;

const inputStyle = css`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  background-color: #f3f3f3;
  transition: border-color 0.3s ease-in-out;
`;

const buttonStyle = css`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background-color: var(--primary-color);
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;

const listItemStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ManageTeamsModal: React.FC<ManageTeamsModalProps> = ({ isOpen, close, addTeam, removeTeam, updateTeams, newTeam, setNewTeam, teams }) => {

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
        <button css={buttonStyle} onClick={() => addTeam(newTeam)}>Add Team</button>
      </form>
      <div>
        {teams.map((team:string) => (
          <div key={team} css={listItemStyle}>
            <span>{team}</span>
            <button css={buttonStyle} onClick={() => removeTeam(team)}>Delete</button>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ManageTeamsModal;
