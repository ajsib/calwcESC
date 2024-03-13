/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, {ReactNode} from 'react';


const gridContainerStyle = css`
  display: grid;
  grid-template-columns: auto auto; /* Two columns with automatic width */
  gap: 20px; /* Adjust the gap between grid items as needed */
  width: calc(100% - (var(--margin) * 2)); // 100% minus the left and right padding
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
`;

const gridItemStyle = css`
  padding: 20px; /* Adjust the padding as needed */
  width: 100%;
`;

interface GridContainerProps {
  children: ReactNode;
}

export default function GridContainer({ children } : GridContainerProps) {
    const childrenArray = React.Children.toArray(children);
  return (
    <div css={gridContainerStyle}>
      {childrenArray.map((child, index) => (
        <div key={index} css={gridItemStyle}>
          {child}
        </div>
      ))}
    </div>
  );
}