// ./components/Pages/Landing/Mission/CardTemplate.tsx
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "@/components/UI/Card";
import WedgeRightBold from '@/components/UI/arrows/RightWedgeBold'
import { useRouter } from 'next/router'; 

const cardStyle = css`
  display: flex;
  align-items: stretch;
`;

const cardSize = css`
  width: calc(100% - 2 * var(--margin));
  padding-left: calc(var(--margin) - 0.5rem);
  padding-bottom: 4rem;
`;

const cardImage = css`
  background-size: cover;
  background-position: center;
  width: calc(50% - 2.5rem); // Subtract your desired margin
  margin: 1rem;
  background-repeat: no-repeat;
`;

const cardImageStyle = css`
  width: calc(50% - 2.5rem);
  height: auto;
  margin-right: 2rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`;

const cardTextStyle = css`
  width: calc(50% - 2.5rem);
  text-align: left;
  align-self: flex-start;
  padding-left: 1rem;
  padding-top: 3rem;
  padding-bottom: 4rem;
`;

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
  // text-transform: uppercase;
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
}

const CardTemplate = ({ imageSrc, title, text }: CardTemplateProps) => {
  const router = useRouter();
  const { locale } = router;

  const LearnMore = locale === 'en' ? 'Learn More' : 'En savoir plus';
  
  return (
    <div css={cardSize}>
      <Card>
        <div css={[cardStyle, cardStyleHover]}>
          {/* Use div with background image here */}
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
