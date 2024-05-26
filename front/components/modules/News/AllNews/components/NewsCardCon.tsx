import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NewsCard from './NewsCard';

interface NewsCardConProps {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
  content: string;
  priority: number;
}

const NewsCardCon: React.FC<NewsCardConProps> = ({
  id,
  title,
  description,
  imageUrl,
  date,
  priority,
  content
}) => {
  const router = useRouter();

  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  const handleClick = () => {
    router.push(`/news/${encodeURIComponent(id)}`);
  };

  return (
    <NewsCard
      id={id}
      title={title}
      description={description}
      date={date}
      backgroundImage={backgroundImage}
      handleClick={handleClick}
      priority={priority}
      content={content}
      imageUrl={imageUrl}
    />
  );
};

export default NewsCardCon;
