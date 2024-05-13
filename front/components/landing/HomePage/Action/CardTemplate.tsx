/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Card from '@/components/UI/Card';
import WedgeMedium from '@/components/UI/arrows/RightWedgeThin';


const arrowIconStyle = css`
  margin-left: 1.5rem;
  transition: transform 0.3s ease-in-out;
  width: 24px;
  height: 24px;
`;

const cardStyleHover = css`
  svg {
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    svg {
      transform: translateX(5px);
    }
  }
`;

interface CardTemplateProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  onClick?: () => void; 
  isMobile: boolean;
}

const CardTemplate = ({ title, subtitle, onClick, isMobile }: CardTemplateProps) => {
  const cardSize = css`
    padding-top: 2rem;
    width: ${isMobile ? 'calc(100% - 2rem)' : 'calc(50vw - var(--margin) - 12rem)'};
    padding: ${isMobile ? '0rem 1rem;' : '3rem 6rem'};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

const cardContentStyle = css`
  display: flex;
  flex-direction: column;
  padding-left: ${isMobile ? '1rem' : '2rem'};
  padding-right: ${isMobile ? '1rem' : '2rem'};
  padding-top: ${isMobile ? '2rem' : '2rem'};
  padding-bottom: ${isMobile ? '4rem' : '8rem'};
  width: ${isMobile ? 'calc(100% -2rem)' : 'calc(50vw - var(--margin) - 12rem)'};
  text-align: left;
  transition: background-color 0.3s ease-in-out;
  align-items: center;
`;

const cardTitleStyle = css`
  font-size: ${isMobile ? '2rem' : '2.5rem'}; // Reduced font size for mobile
  font-weight: bold;
  margin-bottom: 3rem;
  line-height: 1.2;
`;

const cardSubtitleStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: ${isMobile ? '1rem' : '1.2rem'}; // Reduced font size for mobile
  color: #555;
  position: relative;
  transition: all 0.3s ease-in-out;
  line-height: 1.5rem;
`;



  return (
    <div css={[cardSize, cardStyleHover]} onClick={onClick}>
      <Card>
        <div css={cardContentStyle}>
          <h2 css={cardTitleStyle}>{title}</h2>
          <div css={cardSubtitleStyle}>
            <p>{subtitle}</p>
            <div css={arrowIconStyle}><WedgeMedium size={26} /></div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardTemplate;
