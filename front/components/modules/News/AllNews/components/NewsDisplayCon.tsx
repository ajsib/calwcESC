import React, { useState, useEffect } from 'react';
import NewsData from '../../news-dummy.json';
import { NewsItem } from '../../Types';
import NewsDisplay from './NewsDisplay';

const NewsDisplayCon = () => {
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

    return (
        <NewsDisplay
            newsItems={newsItems}
            currentPage={currentPage}
            numPages={numPages}
            itemsPerPage={itemsPerPage}
            handlePageChange={handlePageChange}
        />
    );
};

export default NewsDisplayCon;
