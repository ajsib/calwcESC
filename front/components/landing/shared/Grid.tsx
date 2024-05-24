/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

interface FlexContainerProps {
  children: React.ReactNode;
  margin?: number; // Optional prop to control the margin, defaulting to 0 if not provided.
}

export default function FlexContainer({ children, margin = 0 }: FlexContainerProps) {
  const flexContainerStyle = css`
    display: flex;
    flex-wrap: wrap; // Enable wrapping
    justify-content: space-between;
    gap: 2rem;
    margin-left: calc(var(--margin) + ${margin}rem);
    margin-right: calc(var(--margin) + ${margin}rem);
    width: calc(100% - ${2 * margin}rem - 2 * var(--margin));

    @media (max-width: 768px) {
      justify-content: center; // Center items on smaller screens
    }
  `;

  const childStyle = css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-basis: calc(50% - 1rem); // Half width minus gap
    flex-grow: 1;

    @media (max-width: 768px) {
      flex-basis: 100%; // Full width on small screens
    }
  `;

  const renderedChildren = React.Children.map(children, (child) => (
    <div css={childStyle}>{child}</div>
  ));

  return <div css={flexContainerStyle}>{renderedChildren}</div>;
}
