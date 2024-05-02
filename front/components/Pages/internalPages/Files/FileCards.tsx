/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FileCard from './FileCard';
import fileData from '@/components/Shared/API/Data/files-dummy.json';
import { File } from '@/components/Shared/Types/types';

const fileCardsStyle = css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
`;

const FileCards = () => {
  // Sort fileData by last edited timestamp in descending order
  const sortedFiles: File[] = fileData.sort((a: File, b: File) => new Date(b.dateModified).getTime() - new Date(a.dateModified).getTime());

  // Select the 4 most recently edited files
  const recentFiles: File[] = sortedFiles.slice(0, 4);

  return (
    <div css={fileCardsStyle}>
      {recentFiles.map((file: File, index) => (
        <FileCard key={index} name={file.fileName} />
      ))}
    </div>
  );
};

export default FileCards;
