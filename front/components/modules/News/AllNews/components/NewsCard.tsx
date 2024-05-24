/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import RightWedgeThin from '@/components/UI/arrows/RightWedgeThin';
import Image from 'next/image';

const newsCardStyle = css`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1rem 0;
  gap: 1rem;
  width: 100%;
  border-bottom: 1px solid #ccc;
  transition: all 0.3s ease;
  svg {
    transition: all 0.5s ease;
  }
  &:hover {
    cursor: pointer;
    background-color: #ccc;
    svg {
      transform: translateX(5px);
    }
  }
`;

const imageContainerStyle = css`
  width: 10rem;
  height: 100%;
  position: relative; /* Required for next/image to work correctly */
`;

const titleStyle = css`
  width: 65%;
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

const dateStyle = css`
  width: 6rem;
  font-size: 1rem;
  color: #6c757d;
  padding-left: 1rem;
`;

const readMoreStyle = css`
  display: flex;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  gap: 0.4rem;
`;

interface NewsCardProps {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
  content: string;
  priority: number;
  backgroundImage: string | null;
  handleClick: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  description,
  date,
  backgroundImage,
  imageUrl,
  handleClick
}) => (
  <div css={newsCardStyle} onClick={handleClick}>
    <div css={dateStyle}>
      <p>{date}</p>
    </div>
    <div css={imageContainerStyle}>
        <Image src={imageUrl} alt={title} width={150} height={100} objectFit="cover" />
    </div>
    <div css={titleStyle}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div css={readMoreStyle}>
      <p>Read More</p>
      <RightWedgeThin size={15} />
    </div>
  </div>
);

export default NewsCard;
