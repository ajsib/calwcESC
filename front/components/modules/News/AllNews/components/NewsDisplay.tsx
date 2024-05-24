/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NewsItem } from '../../Types';
import Pagination from './Pagination';
import NewsCardCon from './NewsCardCon';

interface NewsDisplayProps {
    newsItems: NewsItem[];
    currentPage: number;
    numPages: number;
    itemsPerPage: number;
    handlePageChange: (page: number) => void;
}

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

const NewsDisplay: React.FC<NewsDisplayProps> = ({
    newsItems,
    currentPage,
    numPages,
    itemsPerPage,
    handlePageChange,
}) => {
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
                    <NewsCardCon
                        key={index}
                        title={article.title}
                        description={article.description}
                        imageUrl={article.imageUrl}
                        date={article.date}
                        id={article.id}
                        priority={article.priority}
                        content={article.content}
                    />
                ))}
            </div>
            <div css={[headerStyle, { padding: '1rem 0' }]}>
                <Pagination numPages={numPages} currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
        </div>
    );
};

export default NewsDisplay;
