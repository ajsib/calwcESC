/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';  // Import the NewsCard component
import NewsData from '@/components/Pages/publicPages/News/data.json';

interface NewsItem {
    title: string;
    description: string;
    imageUrl: string;
    date: string;
}

const NewsDisplay = () => {
    const [newsItems, setNewsItems] = useState<NewsItem[]>(NewsData);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 5;
    const [numPages, setNumPages] = useState<number>(Math.ceil(newsItems.length / itemsPerPage));

    useEffect(() => {
        setNumPages(Math.ceil(newsItems.length / itemsPerPage));
    }, [newsItems]);

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

    const Pagination = () => {
        const pageNumbers = Array.from({ length: numPages }, (_, i) => i + 1);
        return (
            <div css={pageSelectorStyle}>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>Previous</button>
                {pageNumbers.map(page => (
                    <button key={page} onClick={() => handlePageChange(page)} disabled={page === currentPage}>
                        {page}
                    </button>
                ))}
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= numPages}>Next</button>
            </div>
        );
    };

    // Get the current items to display
    const currentItems = newsItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div css={containerStyle}>
            <div css={headerStyle}>
                <div css={resultsStyle}>{newsItems.length} entries found</div>
                <Pagination />
            </div>
            <div css={labelsStyle}>
                <p>Date</p>
                <p>Title</p>
            </div>
            <div css={newsCardsContainerStyle}>
                {currentItems.map((article, index) => (
                    <NewsCard key={index} title={article.title} description={article.description} imageUrl={article.imageUrl} date={article.date} />
                ))}
            </div>
        </div>
    );
};

export default NewsDisplay;
