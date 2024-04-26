/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

// Styles for the entire file entry
const fileEntryStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #e1e4e8;
`;

// Style for the file name to be on the left
const fileNameStyle = css`
  flex: 2;
`;

// Style for the other fields to be on the right
const fileInfoStyle = css`
  flex: 1;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface FileProps {
  fileName: string;
  fileType: string;
  creator: string;
  dateAdded: string;
  dateModified: string;
}

const FileEntry: React.FC<FileProps> = ({ fileName, fileType, creator, dateAdded, dateModified }) => {
  return (
    <div css={fileEntryStyle}>
      <div css={fileNameStyle}>{fileName}</div>
      <div css={fileInfoStyle}>{fileType}</div>
      <div css={fileInfoStyle}>{creator}</div>
      <div css={fileInfoStyle}>{dateAdded}</div>
      <div css={fileInfoStyle}>{dateModified}</div>
    </div>
  );
};

export default FileEntry;
