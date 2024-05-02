/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { Profile } from '@/components/Shared/Types/types';

// Existing styles integrated with your provided styles
const generalProfileCardStyle = css`
  display: flex;
  align-items: center;
  padding: 2.5rem;
  margin: 0.5rem 0;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: relative;
`;

// Provided styles
const photoParentStyle = css`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  border-right: 1px solid black;
  height: 100%;
`;

// Profile photo style with cover and position center
const profilePhotoStyle = css`
  width: 130px;
  height: 130px;
  background-color: #eee;
  border-radius: 50%;
  margin-right: 1.5rem;
  background-size: cover;
  background-position: center;
`;

// Customized file input style
const fileInputStyle = css`
  appearance: none;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: #eee;
  background-image: url('https://via.placeholder.com/130');
  background-size: cover;
  background-position: center;
  border: none;
  cursor: pointer;

  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &:before {
    content: 'Select Image';
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    height: 100%;
    color: #666;
  }
  &:hover:before {
    color: black;
  }
`;

// Styles for the info text, including inputs to match the text appearance
const infoTextStyle = css`
  & input {
    font-weight: normal;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  & input::placeholder {
    color: #666;
  }
`;

const textParentStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

// Provided styles applied to the corresponding tags
const nameStyle = css`
  font-weight: bold;
  font-size: 1.5rem;
`;

const rankStyle = css`
  font-size: 1.2rem;
`;

const emailStyle = css`
  font-size: 1rem;
`;

const departmentStyle = css`
  font-size: 1rem;
`;

const reportsToStyle = css`
  font-size: 1rem;
`;

// Edit button style
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

// Component
const GeneralProfileCard = ({ profilePhoto, name, rank, email, department, reportsTo }: Profile) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div css={generalProfileCardStyle}>
      <div css={photoParentStyle}>
        {isEditing ? (
          <input type='file' css={fileInputStyle} />
        ) : (
          <div css={profilePhotoStyle} style={{ backgroundImage: `url(${profilePhoto})` }}></div>
        )}
      </div>
      <div css={textParentStyle}>
        {isEditing ? (
          <input css={[infoTextStyle, nameStyle]} type="text" defaultValue={name} />
        ) : (
          <span css={nameStyle}>{name}</span>
        )}
        {isEditing ? (
          <input css={[infoTextStyle, rankStyle]} type="text" defaultValue={rank} />
        ) : (
          <span css={rankStyle}>{rank}</span>
        )}
        {isEditing ? (
          <input css={[infoTextStyle, emailStyle]} type="text" defaultValue={email} />
        ) : (
          <span css={emailStyle}>{email}</span>
        )}
        {isEditing ? (
          <input css={[infoTextStyle, departmentStyle]} type="text" defaultValue={department} />
        ) : (
          <span css={departmentStyle}>{department}</span>
        )}
        {isEditing ? (
          <input css={[infoTextStyle, reportsToStyle]} type="text" defaultValue={reportsTo} />
        ) : (
          <span css={reportsToStyle}>Reports to: {reportsTo}</span>
        )}
      </div>
      <button css={editButtonStyle} onClick={toggleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};

export default GeneralProfileCard;
