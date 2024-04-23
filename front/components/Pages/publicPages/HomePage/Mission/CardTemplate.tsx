/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "@/components/UI/Card";
import WedgeRightBold from '@/components/UI/arrows/RightWedgeBold'
import { useRouter } from 'next/router'; 

const cardTitleStyle = css`
  font-size: 2.5rem;
  color: var(--primary);
  font-weight: bold;
  padding-bottom: 2rem;
  position: relative;
`;

const cardDescriptionStyle = css`
  font-size: 1.2rem;
  text-align: justify;
  color: var(--primary);
  line-height: 1.2;
`;

const learnMoreStyle = css`
  font-size: 0.9rem;
  padding-right: 1rem;
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

const columnWrapperStyle = css`
  display: flex;
  flex-direction: row;
  padding-top: 4rem;
  padding-bottom; 3rem;
  justify-content: left;
  align-items: center;
`;

interface CardTemplateProps {
  imageSrc: string;
  title: string;
  text: React.ReactNode;
  order: number;
  isMobile: boolean;
}

const CardTemplate = ({ imageSrc, title, text, isMobile }: CardTemplateProps) => {
  const router = useRouter();
  const { locale } = router;

  const LearnMore = locale === 'en' ? 'Learn More' : 'En savoir plus';

  const cardStyle = css`
    display: flex;
    flex-direction: ${isMobile ? 'column' : 'row'}; // Updated to conditionally set flex-direction
  `;

  const cardSize = css`
  padding-top: 2rem;
  width: ${isMobile ? 'calc(100% - 1.5rem)' : 'calc(100% - 2 * var(--margin) + 1rem)'};
  padding-left: ${isMobile ? '0.75rem' : 'calc(var(--margin) - 0.5rem)'};
  padding-right: ${isMobile ? '0.75rem' : 'calc(var(--margin) - 0.5rem)'};
  padding-bottom: 2rem;
`;


  const cardImage = css`
    height: ${isMobile ? '20rem' : 'auto'};
    background-size:  cover;
    background-position: center;
    width: ${isMobile ? 'calc(100%)' : 'calc(50% - 2.5rem)'};
    margin: ${isMobile ? '0rem' : '1rem'};
    background-repeat: no-repeat;
  `;

  const cardTextStyle = css`
    width: ${isMobile ? 'calc(100% - 1rem)' : 'calc(50% - 2.5rem)'};
    text-align: left;
    align-self: flex-start;
    padding-left: 0.5rem;
    padding-right: ${isMobile ? '0.5rem' : '0rem'};
    padding-top: 3rem;
    padding-bottom: 4rem;
  `;

  return (
    <div css={cardSize}>
      <Card>
        <div css={[cardStyle, cardStyleHover]}> 
          <div css={[cardImage, { backgroundImage: `url(${imageSrc})` }]} /> 
          <div css={cardTextStyle}>
            <h1 className="card-title-hover-effect" css={cardTitleStyle}>
              {title}
            </h1>
            <p css={cardDescriptionStyle}>{text}</p>
            <div css={columnWrapperStyle}>
              <p className="caption" css={learnMoreStyle}>{LearnMore}</p>
              <WedgeRightBold size={14}/>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CardTemplate;
