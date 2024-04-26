/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface FloatingActionButtonProps {
  onClick: () => void; 
}

const fabStyle = css`
  width: 4rem;
  height: 4rem;
  background-color: rgba(0, 123, 255, 0.8);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  cursor: pointer;
  padding: 4px;
`;

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick }) => (
  <div css={fabStyle} onClick={onClick}>
    Menu
  </div>
);

export default FloatingActionButton;
