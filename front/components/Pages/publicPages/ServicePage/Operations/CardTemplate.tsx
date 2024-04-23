/**@jsxImportSource @emotion/react */
import Card from '@/components/UI/Card';
import { css } from '@emotion/react';
import RightWedgeBold from '@/components/UI/arrows/RightWedgeThin';
import { ReactNode } from 'react';

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


const cardTemplateStyle = css`
    display: flex;
    flex-direction: column;
    padding: 3rem;
    border-radius: 1rem;
    &:hover{
        svg {
            transform: translateX(5px);
          }
    }

    @media (max-width: 768px) {
        padding: 2rem;
    }
`;

const cardTitleStyle = css`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3rem;
    gap: 2rem;
    text-align: justify;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        font-size: 1.5rem;
        gap: 0.5rem;
        margin-bottom: 2rem;
    }
`;

const cardSubtitleStyle = css`
    font-size: 1.5rem;
    margin-bottom: 3rem;
    text-align: left;
    width: 100%;
    @media (max-width: 768px) {
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }
`;

interface CardTemplateProps {
    title: ReactNode; 
    subtitle: ReactNode; 
  }

export default function CardTemplate({title, subtitle}: CardTemplateProps) {
    return (
        <div css={cardStyleHover}>
            <Card>
                <div css={cardTemplateStyle}>
                    <h1 css={cardTitleStyle}>{title} <RightWedgeBold size={26}/></h1>
                    <p css={cardSubtitleStyle}>{subtitle}</p>
                </div>
            </Card>
        </div>
    );
}