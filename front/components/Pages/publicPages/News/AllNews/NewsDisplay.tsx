/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';  // Import the NewsCard component
import NewsData from '@/components/Shared/API/Data/news-dummy.json';
import Pagination from './Pagination';

interface NewsItem {
    title: string;
    description: string;
    imageUrl: string;
    date: string;
    priority: number;
    id: number;
    content: string;
}

const NewsDisplay = () => {
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 12;

    useEffect(() => {
        // Fetch data and sort by priority descending
        const sortedNewsItems = [...NewsData].sort((a: NewsItem, b: NewsItem) => b.priority - a.priority);
        setNewsItems(sortedNewsItems);
    }, []);

    const [numPages, setNumPages] = useState<number>(1);

    useEffect(() => {
        if (newsItems.length > 0) {
            setNumPages(Math.ceil(newsItems.length / itemsPerPage));
        }
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
        border-bottom: 1px solid #ccc;
    `;

    const resultsStyle = css`
        display: flex;
        padding: 0 1rem;
        align-items: center;
        gap: 0.2rem;
        flex-direction: row;
        font-size: 1rem;
        color: #333;
        p{
            font-weight: bold;
        }
    `;

    const labelsStyle = css`
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        border-bottom: 1px solid #ccc;
        font-size: 1rem;
        padding: 1rem;
    `;

    const newsCardsContainerStyle = css`
        display: flex;
        flex-direction: column;
    `;

    const dateStyle = css`
        width: 6rem;
        font-size: 1rem;
    `;

    const fillerStyle = css`
        width: 10rem;
    `;

    // Get the current items to display
    const currentItems = newsItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div css={containerStyle}>
            <div css={headerStyle}>
                <div css={resultsStyle}><p>{newsItems.length}</p> entries found</div>
                <Pagination numPages={numPages} currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
            <div css={labelsStyle}>
                <div css={dateStyle}>Date</div>
                <div css={fillerStyle}></div>
                <div>Title</div>
            </div>
            <div css={newsCardsContainerStyle}>
                {currentItems.map((article: NewsItem, index: number) => (
                    <NewsCard key={index} title={article.title} description={article.description} imageUrl={article.imageUrl} date={article.date} id={article.id} priority={article.priority} content={article.content} />
                ))}
            </div>
            <div css={[headerStyle, { padding: '1rem 0'}]}>
                <Pagination numPages={numPages} currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
        </div>
    );
};

export default NewsDisplay;
