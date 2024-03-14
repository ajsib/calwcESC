// ./components/UI/Card.tsx
/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { css } from "@emotion/react";

const cardStyle = css`
  transition: box-shadow 0.25s ease-in-out; // Slower transition for a more luxurious feel
  cursor: pointer; // Change cursor to pointer

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); // Bigger and more diffuse shadow for an elegant design
  }
`;

interface CardProps {
  children: ReactNode; // Expect a React node as children
}

const Card = ({ children }: CardProps) => <div css={cardStyle}>{children}</div>;

export default Card;
