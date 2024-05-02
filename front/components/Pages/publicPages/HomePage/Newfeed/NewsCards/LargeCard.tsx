/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RightWedgeThin from '@/components/UI/arrows/RightWedgeThin';
import { useRouter } from 'next/router';
import { useArticle } from '@/contexts/ArticleContext';

interface NewsItem {
  id: number; 
  title: string;
  date: string;
  imageUrl: string;
  description: string;
  content: string; 
  priority: number;
}

interface LargeNewsCardProps {
  item: NewsItem;
}

export const LargeNewsCard: React.FC<LargeNewsCardProps> = ({ item }) => {
  const router = useRouter();
  const articleContext = useArticle();
  const { setArticle } = articleContext!;

  const handleClick = () => {
    setArticle(item);
    router.push(`/news/${encodeURIComponent(item.id)}`);
  };

  const cardStyle = css`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    color: white;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    height: 100%;
    max-height: 100%;
    background-image: url(${item.imageUrl});
    background-size: cover;
    background-position: center;
    transition: all 0.5s ease;
    cursor: pointer; /* Ensure it's clickable */
    &:hover {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      div.content {
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }
      .content p {
        opacity: 1;
      }
      .title {
        height: 10rem;
        padding: 1.5rem 0;
      }
      .description {
        height: 15rem;
        opacity: 1;
        svg {
          transform: translateX(3px);
        }
      }
    }
  `;

  const overlayStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%);
    z-index: 1;
    transition: background-image 0.8s ease; // Transition the gradient change
  `;

  const contentStyle = css`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 2.5rem;
    z-index: 2;
    height: 8rem; 
    transition: height 0.7s ease, background-color 0.5s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

  const titleStyle = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `;

  const descriptionStyle = css`
    z-index: 2;
    height: 5rem; // Smaller max-height to start
    transition: height 0.7s ease, opacity 0.5s ease, background-color 0.5s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0;
    font-size: 1.3rem;
    padding: 1rem 0;
  `;

  const readMoreStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom:2rem;
  right: 2rem;
  color: white;
  font-size: 1.2rem;
  gap: 0.4rem;
  svg{
      transition: all 0.5s ease;
    }
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      svg {
        transform: translateX(5px);
      }
    }
  `;

  return (
    <div css={cardStyle} onClick={handleClick}>
      <div className="overlay" css={overlayStyle}></div>
      <div className="content" css={contentStyle}>
        <div css={titleStyle} className='title'> {/* Title and date always visible */}
          <h2>{item.title}</h2>
          <small>{item.date}</small>
        </div>
        <div css={descriptionStyle} className='description'>
            <p>{item.description}</p> {/* Content shown at the bottom on hover */}
            <div css={readMoreStyle}>
                <p>Read Article</p>
                <RightWedgeThin color='#fff' size={15} />
            </div>
        </div>
        
      </div>
    </div>
  );
};
