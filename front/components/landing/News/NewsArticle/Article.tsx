/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image'; 

interface ArticleProps {
    id: number;
    title: string;
    date: string;
    imageUrl: string;
    description: string;
    content: string;
    priority: number;
}

const articleStyle = css`
    font-family: "Segoe UI", Arial, sans-serif;
    max-width: 800px;
    margin: auto;
    padding: 20px;
`;

const titleStyle = css`
    font-size: 32px; /* Larger title */
    font-weight: bold;
    margin-bottom: 10px;
`;

const dateStyle = css`
    font-size: 18px; /* Slightly larger date */
    color: #6c757d;
    margin-bottom: 20px;
`;

const descriptionStyle = css`
    font-size: 18px; /* Larger description */
    color: #343a40;
    margin-bottom: 20px;
`;

const imageStyle = css`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
`;

const contentStyle = css`
    font-size: 18px; /* Larger content */
    line-height: 1.6;
    color: #212529;
`;

const Article = ({ title, date, imageUrl, description, content }: ArticleProps) => {
    console.log(title, date, imageUrl, description, content);
    return (
        <div css={articleStyle}>
            <h1 css={titleStyle}>{title}</h1>
            <p css={dateStyle}><strong>Date:</strong> {date}</p>
            <p css={descriptionStyle}>{description}</p>
            <Image src={imageUrl} alt={title} css={imageStyle} width={500} height={300} layout="intrinsic" />
            <div css={contentStyle}>{content}</div>
        </div>
    );
};

export default Article;
