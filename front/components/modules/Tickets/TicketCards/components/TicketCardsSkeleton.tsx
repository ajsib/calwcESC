/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

// Keyframe animation for the skeleton
const loading = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const skeletonAnimation = css`
  animation: ${loading} 1.5s infinite linear;
  background: linear-gradient(to right, #eee 8%, #ddd 18%, #eee 33%);
  background-size: 800px 104px;
  border-radius: 4px;
`;

// Skeleton Text Style
const skeletonText = css`
  height: 20px;
  width: 100%;
  ${skeletonAnimation};
`;

// Adapting existing styles for skeleton
const ticketCardsStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1rem;
`;

const ticketCardStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #ccc;
  box-shadow: 0 0px 0px rgba(0,0,0,0);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  }
`;

const ticketHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ticketDescriptionStyle = css`
  max-width: 50%;
  overflow: hidden;
  word-wrap: break-word;
  line-height: 1.5rem;
  padding: 0.5rem 0rem;
`;

const ticketInfoStyle = css`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #666;
`;

// Skeleton Component
const TicketCardsSkeleton: React.FC = () => {
  return (
    <div css={ticketCardsStyle}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div css={ticketCardStyle} key={index}>
          <div css={ticketHeaderStyle}>
            <div css={css`${skeletonText}; width: 60%;`}></div>
            <div css={css`${skeletonText}; width: 20%;`}></div>
          </div>
          <div css={css`${skeletonText}; width: 100%; ${ticketDescriptionStyle}`}></div>
          <div css={ticketInfoStyle}>
            <div css={css`${skeletonText}; width: 30%;`}></div>
            <div css={css`${skeletonText}; width: 30%;`}></div>
            <div css={css`${skeletonText}; width: 30%;`}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketCardsSkeleton;
