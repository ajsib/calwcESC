/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import RightWedgeThin from '@/components/UI/arrows/RightWedgeThin';

const NewsNavigateCard = () => {
  const router = useRouter();

  const cardStyle = css`
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    background-color: #333;
    height: 50%;  // Adjust according to your layout needs
    max-height: 100%;
    &:hover {
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      svg {
        transform: translateX(5px);
      }
    }
  `;

  const contentStyle = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    h4 {
      font-size: 1.2rem;
    }
    svg {
      transition: all 0.5s ease;
    }
  `;

  const navigate = () => {
    router.push('/news'); 
  };

  return (
    <div css={cardStyle} onClick={navigate}>
      <div css={contentStyle}>
        <h4>All News</h4> 
        <RightWedgeThin color='#fff' size={20} /> {/* Apply the wedge style */}
      </div>
    </div>
  );
};

export default NewsNavigateCard;
