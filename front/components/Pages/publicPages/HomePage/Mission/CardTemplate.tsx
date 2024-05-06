/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "@/components/UI/Card";
import WedgeRightBold from '@/components/UI/arrows/RightWedgeBold';
import { useRouter } from 'next/router'; 

const baseStyles = css`
  font-size: 1.2rem;
  text-align: left;
  color: var(--primary);
`;

const cardStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 2rem);
  margin: 0 1rem;
  height: calc(50vh - 3rem);
  min-height: 22rem;
  box-shadow: none;
  transition: box-shadow 0.5s ease;

  /* Add transition property to the SVG */
  svg {
    transition: transform 0.3s ease; /* Adjust the duration and easing as needed */
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    svg {
      transform: translateX(3px);
    }
    .learn-more {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;


const cardImageStyle = css`
  height: auto;
  background-size: cover;
  background-position: center;
  width: calc(50% - 2rem);
  margin: 1rem;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    height: 20rem;
  }
`;

const cardTextStyle = css`
  width: calc(50% - 5rem);
  height: calc(100% - 4rem);
  padding-top: 2rem;
  margin-right: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const textStyle = css`
  ${baseStyles};
  font-size: 2.5rem;
  font-weight: bold;
`;

const descriptionStyle = css`
  ${baseStyles};
  font-size: 1.2rem;
  line-height: 1.5;
`;

const learnMoreStyle = css`
  ${baseStyles};
  font-size: 1.1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  transition: text-decoration 0.2s ease-out;
`;

const columnWrapperStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

interface CardTemplateProps {
  imageSrc: string;
  title: string;
  text: React.ReactNode;
  isMobile: boolean;
  onClick?: () => void;
}

const CardTemplate = ({ imageSrc, title, text, isMobile, onClick }: CardTemplateProps) => {
  const router = useRouter();
  const LearnMoreText = router.locale === 'en' ? 'Learn More' : 'En savoir plus';

  return (
    <div css={cardStyles} onClick={onClick}> 
      <div css={[cardImageStyle, { backgroundImage: `url(${imageSrc})` }]} /> 
      <div css={cardTextStyle}>
        <h1 css={textStyle}>{title}</h1>
        <p css={descriptionStyle}>{text}</p>
        <div css={columnWrapperStyle}>
          <p css={learnMoreStyle} className="learn-more">{LearnMoreText}</p>
          <WedgeRightBold size={16}/>
        </div>
      </div>
    </div>
  );
}

export default CardTemplate;
