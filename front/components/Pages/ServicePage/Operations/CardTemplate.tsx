/**@jsxImportSource @emotion/react */
import Card from '@/components/UI/Card';
import { css } from '@emotion/react';
import { FiArrowRight } from 'react-icons/fi';
import { ReactNode } from 'react';


const cardTemplateStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    text-align: center;
    &:hover{
        svg {
            transform: translateX(5px); // Moves the arrow to the right on hover
          }
    }
`;

const cardTitleStyle = css`
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
`;

const cardSubtitleStyle = css`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 3rem;
`;

const arrowIconStyle = css`
    transition: transform 0.3s ease-in-out;
    `;

interface CardTemplateProps {
    title: ReactNode; 
    subtitle: ReactNode; 
  }

export default function CardTemplate({title, subtitle}: CardTemplateProps) {
    return (
        <div>
            <Card>
                <div css={cardTemplateStyle}>
                    <h1 css={cardTitleStyle}>{title} <FiArrowRight css={arrowIconStyle}/></h1>
                    <p css={cardSubtitleStyle}>{subtitle}</p>
                </div>
            </Card>
        </div>
    );
}