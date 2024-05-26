/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Article from './Article';
import { fetchArticleData } from '../services/fetchNews';
import { ArticleProps } from '../../Types';

const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ArticleCon = () => {
  const [article, setArticle] = useState<ArticleProps | null>(null);
  const router = useRouter();
  const { article: articleId } = router.query; // Using article as the query parameter

  useEffect(() => {
    if (router.isReady && articleId) {
      fetchArticleData(parseInt(articleId as string)).then(data => {
        setArticle(data);
      }).catch(error => {
        console.error("Error fetching article data:", error);
      });
    }
  }, [router.isReady, articleId]);

  if (!article) {
    return <div css={containerStyle}>Loading...</div>;
  }

  return (
    <Article 
      title={article.title} 
      date={article.date} 
      imageUrl={article.imageUrl} 
      description={article.description} 
      content={article.content} 
      id={article.id}
      priority={article.priority}
    />
  );
};

export default ArticleCon;
