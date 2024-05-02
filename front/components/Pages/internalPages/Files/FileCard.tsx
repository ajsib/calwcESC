/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import e from 'express';

const fileCardStyle = css`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 4px;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background-color: #f5f5f5;
    border-color: #999;
    transition: all 0.3s ease;
    transform: translateY(-1px);
  }
`;

const FileCard = ({ name }: { name: string }) => {
    return (
      <div css={fileCardStyle}>
        {name}
      </div>
    );
  };

export default FileCard