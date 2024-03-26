/** @jsxImportSource @emotion/react */
import Card from '@/components/UI/Card';
import { css } from '@emotion/react';
import RightWedge from '@/components/UI/arrows/RightWedgeMedium';
import { ReactNode } from 'react';

const cardTemplateStyle = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 1rem;
    svg {
        transition: transform 0.2s ease-in-out;
    }
    
    &:hover {
        svg {
            transform: translateX(5px);
        }
    }
`;

const cardTitleStyle = css`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3rem;
    text-align: justify;
    display: flex;
    margin-left: 2rem;
    align-items: center;
    gap: 2rem;
`;

const cardSubtitleStyle = css`
    font-size: 1.5rem;
    margin-bottom: 3rem;
    text-align: left;
    margin-left: 2rem;
    width: calc(50% + 4rem);
`;

const photoStyle = (backgroundImage: string) => css`
    width: 100%;
    height: 18rem;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    margin-bottom: 1rem;
`;


interface CardTemplateProps {
    title: ReactNode;
    subtitle: ReactNode;
    backgroundImage: string; 
}

export default function CardTemplate({ title, subtitle, backgroundImage }: CardTemplateProps) {
    return (
        <div css={cardTemplateStyle}>
            <Card>
                <div css={photoStyle(backgroundImage)} />
                <h1 css={cardTitleStyle}>{title} <RightWedge size={26} /></h1>
                <p css={cardSubtitleStyle}>{subtitle}</p>
            </Card>
        </div>
    );
}
