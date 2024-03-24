/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode, CSSProperties } from 'react';

interface FlexContainerProps {
  children: ReactNode;
  margin: number; // Added prop to control the margin
}

export default function FlexContainer({ children, margin }: FlexContainerProps) {
  // Convert the margin prop to a CSS value
  const dynamicStyles: CSSProperties = {
    '--margin': `${margin}px`,
  } as React.CSSProperties;

  // Modified flexContainerStyle to use dynamicStyles for --margin
  // Added a media query to change flex-direction to column when width is not enough for 2 items
  const flexContainerStyle = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: calc(100% - (var(--margin) * 2) - 4rem);
    margin-left: var(--margin);
    margin-right: auto;
    gap: 2rem;
    flex-direction: row;

    @media (max-width: 1300px) { /* Adjust the max-width as needed */
      flex-direction: column;
      align-items: center; 
    }
  `;

  const flexItemStyle = css`
    width: calc((100% - (var(--margin) * 2) - 4rem - 2rem) / 2); 
    @media (max-width: 1300px) { /* Adjust the max-width as needed */
      width: 100%; /* Full width in vertical alignment */
    }
  `;

  const childrenArray = React.Children.toArray(children);
  return (
    <div css={flexContainerStyle} style={dynamicStyles}>
      {childrenArray.map((child, index) => (
        <div key={index} css={flexItemStyle}>
          {child}
        </div>
      ))}
    </div>
  );
}
