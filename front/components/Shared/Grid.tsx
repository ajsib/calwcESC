/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode } from 'react';

const flexContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: calc(100% - (var(--margin) * 4) - 4rem);
  margin-left: calc(2 * var(--margin));
  margin-right: auto;
  gap: 2rem;
  flex-direction: row; /* Default direction is row */
  
`;

const flexItemStyle = css`
  width: calc(30rem);

`;

interface FlexContainerProps {
  children: ReactNode;
}

export default function FlexContainer({ children }: FlexContainerProps) {
  const childrenArray = React.Children.toArray(children);
  return (
    <div css={flexContainerStyle}>
      {childrenArray.map((child, index) => (
        <div key={index} css={flexItemStyle}>
          {child}
        </div>
      ))}
    </div>
  );
}
