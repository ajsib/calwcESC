/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useArticle } from '@/contexts/ArticleContext';
import RightWedgeThin from '@/components/UI/arrows/RightWedgeThin';

const newsCardStyle = css`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 1rem 0;
    gap: 1rem;
    width: 100%;
    border-bottom: 1px solid #ccc;
    transition: all 0.3s ease;
    svg{
        transition: all 0.5s ease;
    }
    &:hover {
        cursor: pointer;
        background-color: #ccc;
        svg {
          transform: translateX(5px);
        }
    }
`;

const imageStyle = css`
    img {
        width: 10rem;
        height: 100%;
    }
`;

const titleStyle = css`
    width: 65%;
    h3{
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
`;

const dateStyle = css`
    width: 6rem;
    font-size: 1rem;
    color: #6c757d;
    padding-left: 1rem;
`;


const readMoreStyle = css`
  display: flex;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  gap: 0.4rem;
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

const NewsCard = ({ id, title, description, imageUrl, date, priority, content }: NewsCardProps) => {
    const router = useRouter();
    const articleContext = useArticle()!;
    const { setArticle } = articleContext;

    const handleClick = () => {
        setArticle({ id, title, date, imageUrl, description, content, priority });
        router.push(`/news/${encodeURIComponent(id)}`);
    };

    return (
        <div css={newsCardStyle} onClick={handleClick}>
            <div css={dateStyle}>
                <p>{date}</p>
            </div>
            <div css={imageStyle}>
                <img src={imageUrl} alt={title} />
            </div>
            <div css={titleStyle}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div css={readMoreStyle}>
                <p>Read More</p>
                <RightWedgeThin size={15} />
            </div>
        </div>
    );
}

export default NewsCard;
