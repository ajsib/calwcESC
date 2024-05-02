/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import NewsCard from './NewsCard';  // Import the NewsCard component

interface NewsItem {
    title: string;
    description: string;
    imageUrl: string;
    date: string;
}

interface NewsDisplayProps {
    totalResults?: number; // Make totalResults prop optional
    numPages: number;
}

const NewsDisplay = ({ totalResults = 0, numPages }: NewsDisplayProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const containerStyle = css`
        padding: 1rem;
        margin-top: 3rem;
        background: #f3f3f3;
    `;

    const headerStyle = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #ccc;
        margin-bottom: 0.5rem;
    `;

    const resultsStyle = css`
        font-size: 1rem;
        color: #333;
    `;

    const labelsStyle = css`
    display: flex;
    flex-direction: row;
    padding-bottom: 0.5rem;
    gap: 1rem;
    align-items: center;
    border-bottom: 1px solid #ccc;
    font-size: 1rem;
    margin-bottom: 1rem;

    > p {
        width: 10rem;
        text-align: left;
        &:last-of-type {
            margin-left: 10rem;
            text-align: right;
        }
    }
`;

    const pageSelectorStyle = css`
        display: flex;
        gap: 10px;
        align-items: center;
    `;

    const newsCardsContainerStyle = css`
        display: flex;
        flex-direction: column;
    `;

    // Enhanced Pagination Component
    const Pagination = () => {
        const pages = Array.from({ length: Math.min(5, numPages) }, (_, i) => i + 1);
        return (
            <div css={pageSelectorStyle}>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>Previous</button>
                {pages.map(page => (
                    <button key={page} onClick={() => handlePageChange(page)} disabled={page === currentPage}>
                        {page}
                    </button>
                ))}
                {numPages > 5 && <span>...</span>}
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= numPages}>Next</button>
            </div>
        );
    };

    // Dummy data for news articles
    const newsArticles: NewsItem[] = [
        {
            title: "Title 1",
            description: "This is a short description of the first news item.",
            imageUrl: "/images/landing/flicker8.jpg",
            date: "2024-05-01"
        },
        {
            title: "Title 2",
            description: "This is a short description of the second news item.",
            imageUrl: "/images/landing/flicker8.jpg",
            date: "2024-05-02"
        },
        {
            title: "Title 3",
            description: "This is a short description of the third news item.",
            imageUrl: "/images/landing/flicker8.jpg",
            date: "2024-05-03"
        }
    ];

    return (
        <div css={containerStyle}>
            <div css={headerStyle}>
                <div css={resultsStyle}>{newsArticles.length} entries found</div>
                <Pagination />
            </div>
            <div css={labelsStyle}>
                <p>Date</p>
                <p>Title</p>
            </div>
            <div css={newsCardsContainerStyle}>
                {newsArticles.map((article, index) => (
                    <NewsCard key={index} title={article.title} description={article.description} imageUrl={article.imageUrl} date={article.date} />
                ))}
            </div>
        </div>
    );
};

export default NewsDisplay;
