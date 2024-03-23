/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Card from '@/components/UI/Card';
import { ReactNode } from 'react';

interface CardTemplateProps {
    title: ReactNode; 
    subtitle: ReactNode; 
    image?: string;
}

const cardStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    img {
        height: 10rem;
        width: 100%;
    }
    h2 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1rem;
        text-align: center;
    }
    `;
  
const CardTemplate = ({ title, subtitle, image }: CardTemplateProps) => (
    <div css={cardStyle}>
        <Card>
        <div>
            <img src={image} />
            <h2>{title}</h2>
            <p>
            {subtitle}
            </p>
        </div>
        </Card>
    </div>
);

export default CardTemplate