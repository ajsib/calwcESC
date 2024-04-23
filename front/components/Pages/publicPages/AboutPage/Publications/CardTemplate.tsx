/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Card from '@/components/UI/Card';
import RightWedge from '@/components/UI/arrows/RightWedgeMedium';

interface CardTemplateProps {
    title: React.ReactNode;
    subtitle: React.ReactNode;
    backgroundImage: string;
}

const cardTemplateStyle = css`
    display: flex;
    flex-direction: column;
    width: 100%; // Ensure width is controlled by container
    min-height: 420px; // Set a minimum height to maintain consistency
    border-radius: 1rem;

    &:hover {
        svg {
            transform: translateX(5px);
        }
    }
`;

const photoStyle = (backgroundImage: string) => css`
    width: 100%;
    height: 18rem;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    margin-bottom: 1rem;
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
    @media (max-width: 768px) {
        font-size: 1.5rem;
        gap: 1rem;
        margin-bottom: 2rem;
        margin-left: 1rem;
    }
`;

const cardSubtitleStyle = css`
    font-size: 1.5rem;
    margin-bottom: 3rem;
    text-align: left;
    margin-left: 2rem;
    width: calc(50% + 4rem);
    @media (max-width: 768px) {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        margin-left: 1rem;
        width: calc(50% + 2rem);
    }
`;

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
