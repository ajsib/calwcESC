/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FileCard from './FileCard';
import { File } from '../../Types';
import { FileCardsProps } from '../Types';

const fileCardsStyle = css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
`;

const FileCards = ({ fileData }: FileCardsProps) => {
  return (
    <div css={fileCardsStyle}>
      {fileData.map((file: File, index) => (
        <FileCard key={index} name={file.fileName} />
      ))}
    </div>
  );
};

export default FileCards;
