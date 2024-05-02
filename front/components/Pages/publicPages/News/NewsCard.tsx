/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';



const newsCardStyle = css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding-bottom: 1rem;
    gap: 1rem;
    width: 100%;
    margin-bottom: 1rem;
    border-bottom: 1px solid #ccc;

    > p {
        width: 10rem; /* Exact width for the date alignment */
        text-align: left; /* Center the date */
    }

    > img {
        width: 15rem;
        height: 10rem;
        object-fit: cover;
    }
`;
const imageStyle = css`
    width: 15rem;
    height: 10rem;
    object-fit: cover;
    margin-right: 1rem;
`;

const titleStyle = css`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;


interface NewsCardProps {
    title: string;
    description: string;
    imageUrl: string;
    date: string;
}


export default function NewsCard({ title, description, imageUrl, date }: NewsCardProps) {
    return (
        <div css={newsCardStyle}>
            <p>{date}</p>
            <img css={imageStyle} src={imageUrl} alt={title} />
            <div>
                <h3 css={titleStyle}>{title}</h3>
                <p>{description}</p>
            </div>  
        </div>
    );
}