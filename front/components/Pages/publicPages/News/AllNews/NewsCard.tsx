/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useArticle } from '@/contexts/ArticleContext';

const newsCardStyle = css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding-bottom: 1rem;
    gap: 1rem;
    width: 100%;
    margin-bottom: 1rem;
    border-bottom: 1px solid #ccc;
    cursor: pointer; /* Change cursor on hover to indicate it's clickable */

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
    id: number;
    title: string;
    date: string;
    imageUrl: string;
    description: string;
    content: string;
    priority: number;
}

export default function NewsCard({ id, title, description, imageUrl, date, priority, content }: NewsCardProps) {
    const router = useRouter();
    const articleContext = useArticle()!;
    const {setArticle} = articleContext;

    const handleClick = () => {
        setArticle({id, title, date, imageUrl, description, content, priority});
        router.push(`/news/${encodeURIComponent(id)}`);
    }

    return (
        <div css={newsCardStyle} onClick={handleClick}>
            <p>{date}</p>
            <img css={imageStyle} src={imageUrl} alt={title} />
            <div>
                <h3 css={titleStyle}>{title}</h3>
                <p>{description}</p>
            </div>  
        </div>
    );
}