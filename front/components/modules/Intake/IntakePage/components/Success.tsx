/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const containerStyle = css`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
`;

const headingStyle = css`
  font-size: 2rem;
  font-family: Arial, sans-serif;
  color: #333;
  margin-bottom: 1rem;
`;

const paragraphStyle = css`
  font-size: 1rem;
  font-family: Arial, sans-serif;
  color: #666;
  line-height: 1.5;
`;

const Page7 = () => (
    <div css={containerStyle}>
        <h2 css={headingStyle}>Success</h2>
        <p css={paragraphStyle}>Your submission was successful!</p>
    </div>
);

export default Page7;
