/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArticleProps } from '../../Types';

const articleStyle = css`
  font-family: "Segoe UI", Arial, sans-serif;
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const titleStyle = css`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 100px;
`;

const dateStyle = css`
  font-size: 18px;
  color: #6c757d;
  margin-bottom: 20px;
`;

const descriptionStyle = css`
  font-size: 18px;
  color: #343a40;
  margin-bottom: 20px;
`;

const imageStyle = css`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const contentStyle = css`
  font-size: 18px;
  line-height: 1.6;
  color: #212529;
`;

const Article = ({ title, date, imageUrl, description, content }: ArticleProps) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);

  return (
    <div css={articleStyle}>
      <h1 css={titleStyle}>{title}</h1>
      <p css={dateStyle}><strong>Date:</strong> {date}</p>
      <p css={descriptionStyle}>{description}</p>
      {imageSrc && imageDimensions && (
        <Image 
          src={imageSrc} 
          alt={title} 
          css={imageStyle} 
          width={imageDimensions.width} 
          height={imageDimensions.height} 
          layout="intrinsic" 
        />
      )}
      <div css={contentStyle}>{content}</div>
    </div>
  );
};

export default Article;
