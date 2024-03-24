/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


interface PersonelProps {
    image: string;
    name: string;
    description: string;
}

const imageStyle = css`
    height: 10rem;
    width: auto;
`;

const containerStyle = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    
`;

const textStyle = css`
    display: flex;
    flex-direction: column;
    h1 {
        font-size: 1.5rem;
    }
    p {
        font-size:1rem;
    }
`;

export default function Personel({ image, name, description }: PersonelProps) {
    return (
        <div css={containerStyle}>
            <img src={image} css={imageStyle}/>
            <div css={textStyle}>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}