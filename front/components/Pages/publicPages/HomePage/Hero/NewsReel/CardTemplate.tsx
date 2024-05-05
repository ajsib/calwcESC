/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import RightWedgeThin from '@/components/UI/arrows/RightWedgeThin';
import LeftWedgeThin from '@/components/UI/arrows/LeftWedgeThin';

interface CardTemplateProps {
    items: {
      id: string;
      title: string;
      date?: string;
      url?: string;
    }[];
    progressItem: () => void;
    regressItem: () => void;
    type: 'event' | 'link';
}

const CardTemplate: React.FC<CardTemplateProps> = ({ items, type, progressItem, regressItem }) => {

  const containerStyle = css`
    display: flex;
    justify-content: space-between;
    width: calc(25% + 25%);
    margin-left: 50%;
    transform: translateX(calc(50% - 1rem));
    padding: 1rem;
    background: linear-gradient(to bottom right, rgba(51, 51, 51, 0.9), transparent),
                linear-gradient(to top left, rgba(51, 51, 51, 0.7), transparent);
    transition: background 0.3s ease, transform 0.3s ease, width 0.3s ease;
    &:hover {
      width: 100%;
      background: linear-gradient(to bottom right, rgba(51, 51, 51, 0.9), transparent),
                  linear-gradient(to top left, rgba(51, 51, 51, 0.9), transparent),
                  #333;
      transform: translateX(0.5rem);
      .header {
        font-size: 1.3rem;
      }
      .link-column {
        opacity: 1; // Fade in on hover
      }
      .button {
        opacity: 1; // Fade in on hover
      }
    }
  `;

  const itemsStyle = css`
    width: 100%; // Increase width to accommodate two columns
    display: flex;
    flex-direction: column;
    align-items: flex-start; // Align items to the left within each column
    gap: 1rem;
  `;

  const itemStyle = css`
    transition: color 0.3s ease, opacity 0.3s ease;
    width: 100%; // Full width to align text properly
    &:hover {
      cursor: pointer;
      color: #ff9900;
      text-decoration: underline;
      * {
        color: #ff9900;
        text-decoration: underline;
      }
    }
  `;

  const titleStyle = css`
    font-weight: bold;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    flex-direction: row;
    svg {
      transition: transform 0.3s ease;
    }
    &:hover {
      cursor: pointer;
      svg {
        transform: translateX(5px);
      }
      color: #ff9900;
    }
  `;

  const HeaderStyle = css`
    font-weight: bold;
    font-size: 1.2rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    transition: font-size 0.3s ease;
    width: 100%;
    text-align: left;
  `;

  const dateStyle = css`
    font-size: 0.9rem;
    color: #999;
    transition: color 0.3s ease;
  `;

  const leftButtonStyle = css`
    display: flex;
    align-items: center;
    svg {
      transition: transform 0.3s ease;
    }
    &:hover {
      cursor: pointer;
      svg {
        transform: translateX(-5px);
      }
    }
  `;

  const rightButtonStyle = css`
    display: flex;
    align-items: center;
    svg {
      transition: transform 0.3s ease;
    }
    &:hover {
      cursor: pointer;
      svg {
        transform: translateX(5px);
      }
    }
  `;

  const navButtonStyle = css`
    display: flex;
    align-items: center;
    margin: 0 1rem;
    transition: opacity 0.3s ease;
    opacity: 0;
  `;

  const itemsContainerStyle = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    width: calc(100% - (var(--margin) * 2));
    `;

  const renderHeader = () => {
    if (type === 'event') {
      return "Upcoming Events";
    } else {
      return "Important Links";
    }
  };

  return (
    <div css={containerStyle}>
      <div onClick={regressItem} css={[leftButtonStyle, navButtonStyle]} className='button'>
        <LeftWedgeThin size={16} fillColor='#fff' />
      </div>
      <div css={itemsContainerStyle}>
        <div css={itemsStyle}>
          <div className="header" css={HeaderStyle}>{renderHeader()}</div>
          {items.map((item) => (
            <div key={item.id} css={itemStyle}>
              <div css={titleStyle}>{item.title}</div>
              {item.date && <div css={dateStyle}>{item.date}</div>}
            </div>
          ))}
        </div>
        
        <div className="link-column" css={[itemsStyle, {opacity: 0}]}>
            <div css={[titleStyle, {textDecoration: 'underline'}]}>
              {type === 'event' ? 'View All Events' : 'View All Links'}
              <RightWedgeThin color='#fff' size={16} />
            </div>
          {items.map((item) => (
            <div key={item.id} css={itemStyle}>
              <div css={titleStyle}>{item.title}</div>
              {item.date && <div css={dateStyle}>{item.date}</div>}
            </div>
          ))}
        </div>
      </div>
      <div onClick={progressItem} css={[rightButtonStyle, navButtonStyle]} className='button'>
        <RightWedgeThin color='#fff' size={16} />
      </div>
    </div>
  );
};

export default CardTemplate;
