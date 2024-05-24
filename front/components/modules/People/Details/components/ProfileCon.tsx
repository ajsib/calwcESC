/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import ProfileDisplay from './ProfileCardDisplay';
import ProfileEdit from './ProfileEdit';
import { Profile } from '../../Types';

const generalProfileCardStyle = css`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  margin: 0.5rem 0;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: relative;
  width: 100%;
`;

const editButtonStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.8rem;
  margin: 0.8rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1rem;

  &:hover {
    background-color: #e1e1e1;
  }
`;

const GeneralProfileCard = ({ profile }: { profile: Profile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<Profile>(profile);

  const toggleEdit = () => {
    if (isEditing) {
      // Save changes
      // Here you can handle save logic, like updating a server or local storage
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProfile({
      ...editedProfile,
      [name]: value,
    });
  };

  return (
    <div css={generalProfileCardStyle}>
      {isEditing ? (
        <ProfileEdit profile={editedProfile} onChange={handleChange} />
      ) : (
        <ProfileDisplay profile={profile} />
      )}
      <button css={editButtonStyle} onClick={toggleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};

export default GeneralProfileCard;
