/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode } from 'react';

interface FlexContainerProps {
  children: ReactNode;
  margin?: number; // Prop to control the margin. Defaulted to 0 if not provided.
}

export default function FlexContainer({ children, margin = 0 }: FlexContainerProps) {
  // Updated container style to wrap flex items if there's not enough space
  const flexContainerStyle = css`
    display: flex;
    flex-wrap: wrap; // Allow the container's items to wrap onto multiple lines
    justify-content: space-between;
    gap: 2rem;
    margin-left: calc(var(--margin) + ${margin}rem);
    margin-right: calc(var(--margin) + ${margin}rem);
    width: calc(100% - ${2 * margin}rem - 2 * var(--margin));
  `;

  // Updated style for children to flexibly fill the space or wrap when needed
  const childStyle = css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-basis: calc(50% - 1rem); // Adjusted flex-basis for potential wrapping
    flex-grow: 1; // Allow children to grow and fill the available space
  `;

  // Render all children within a single flex container
  const renderedChildren = React.Children.map(children, (child) => (
    <div css={childStyle}>{child}</div>
  ));

  return <div css={flexContainerStyle}>{renderedChildren}</div>;
}
