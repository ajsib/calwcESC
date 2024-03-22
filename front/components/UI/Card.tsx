// ./components/UI/Card.tsx
/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { css } from '@emotion/react';

const cardStyle = css`
  transition: box-shadow 0.3s ease-in-out; // Smooth transition for the box-shadow
  cursor: pointer; // Change cursor to pointer
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Box shadow appears on hover
  }
`;

interface CardProps {
  children: ReactNode; // Expect a React node as children
}

const Card = ({ children }: CardProps) => (
  <div css={cardStyle}>
    {children}
  </div>
);

export default Card;
