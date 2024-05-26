/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const sectionStyle = css`
  width: 100%;
  max-width: 800px;
  margin-bottom: 40px;
`;

const titleStyle = css`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const listStyle = css`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 20px;
`;

const skeletonItemStyle = css`
  background: #e0e0e0;
  border-radius: 4px;
  height: 40px;
  width: 100%;
`;

const SkeletonModulePreview: React.FC = () => {
  return (
    <div css={containerStyle}>
      <div css={sectionStyle}>
        <h2 css={titleStyle}>Tasks</h2>
        <ul css={listStyle}>
          {[1, 2, 3].map((_, index) => (
            <li key={index} css={skeletonItemStyle}></li>
          ))}
        </ul>
      </div>
      <div css={sectionStyle}>
        <h2 css={titleStyle}>Tickets</h2>
        <ul css={listStyle}>
          {[1, 2, 3].map((_, index) => (
            <li key={index} css={skeletonItemStyle}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkeletonModulePreview;
