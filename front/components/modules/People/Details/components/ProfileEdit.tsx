/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Profile } from '../../Types';

// Provided styles
const fileInputStyle = css`
  margin: 0 1.5rem;
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

const photoParentStyle = css`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  border-right: 1px solid black;
  height: 100%;
`;

const textParentStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const infoTextStyle = css`
  & input {
    font-weight: normal;
  }
  & input::placeholder {
    color: #666;
  }
`;

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

const ProfileEdit = ({ profile, onChange }: { profile: Profile, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  const { name, rank, email, department, reportsTo } = profile;

  return (
    <>
      <div css={photoParentStyle}>
        <input type='file' css={fileInputStyle} />
      </div>
      <div css={textParentStyle}>
        <input css={[infoTextStyle, nameStyle]} type="text" value={name} name="name" onChange={onChange} />
        <input css={[infoTextStyle, rankStyle]} type="text" value={rank} name="rank" onChange={onChange} />
        <input css={[infoTextStyle, emailStyle]} type="text" value={email} name="email" onChange={onChange} />
        <input css={[infoTextStyle, departmentStyle]} type="text" value={department} name="department" onChange={onChange} />
        <input css={[infoTextStyle, reportsToStyle]} type="text" value={reportsTo} name="reportsTo" onChange={onChange} />
      </div>
    </>
  );
};

export default ProfileEdit;
