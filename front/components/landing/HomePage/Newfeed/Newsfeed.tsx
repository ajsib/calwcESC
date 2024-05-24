/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { LargeNewsCard } from './NewsCards/LargeCard';
import { MediumNewsCard } from './NewsCards/MediumCard';
import { SmallNewsCard } from './NewsCards/SmallCard';
import NewsNavigateCard from './NewsButton';
import NewsData from '../../../modules/News/news-dummy.json';
import { useState, useEffect } from 'react';

interface NewsItem {
  title: string;
  date: string;
  imageUrl: string;
  description: string;
  content: string;
  priority: number;
  id: number; 
}

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  
  useEffect(() => {
    // Filter out priority 0 items and sort remaining items by priority
    const filteredItems = NewsData.filter(item => item.priority !== 0)
                                  .sort((a, b) => b.priority - a.priority); // Higher priorities first
    setNewsItems(filteredItems);
  }, []);

  const sectionStyle = css`
    display: flex;
    width: calc(100% - 2rem);
    height: calc(65vh - 2rem);
    background-color: #eee;
    gap: 1rem;
    padding: 1rem;
  `;

  const leftColumn = css`
    width: 50%;
    height: 100%;
  `;

  const rightColumn = css`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `;

  return (
    <div css={sectionStyle}>
      <div css={leftColumn}>
        {/* Render the highest priority news item in the large card, if available */}
        {newsItems.find(item => item.priority === 1) && 
          <LargeNewsCard item={newsItems.find(item => item.priority === 1)!} />}
      </div>
      <div css={rightColumn}>
        {/* Render up to two priority 2 items in medium cards */}
        {newsItems.filter(item => item.priority === 2).slice(0, 2).map((item, index) => (
          <MediumNewsCard key={index} item={item} />
        ))}
      </div>
      <div css={[rightColumn, { borderLeft: '1px solid #999' }]}>
        {/* Render priority 3 items in small cards */}
        {newsItems.filter(item => item.priority === 3).map((item, index) => (
          <SmallNewsCard key={index} item={item} />
        ))}
        <NewsNavigateCard />
      </div>
    </div>
  );
};

export default NewsSection;
