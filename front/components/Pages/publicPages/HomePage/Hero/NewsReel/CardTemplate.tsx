/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface CardTemplateProps {
    items: {
      id: string;
      title: string;
      date?: string;
      url?: string;
    }[];
    type: 'event' | 'link';
  }

const CardTemplate: React.FC<CardTemplateProps> = ({ items, type }) => {

const containerStyle = css`
    display: flex;
    width: 100%;
    padding: 1rem;
    background: linear-gradient(to bottom right, rgba(51, 51, 51, 0.9), transparent),
                linear-gradient(to top left, rgba(51, 51, 51, 0.7), transparent);
    transition: background 0.3s ease, transform 0.3s ease;
    transform: translateX(20%);
    &:hover {
      background: linear-gradient(to bottom right, rgba(51, 51, 51, 0.9), transparent),
                  linear-gradient(to top left, rgba(51, 51, 51, 0.9), transparent),
                  #333;
      transform: translateX(0);

      .header { // This targets the element with class 'header'
        font-size: 1.3rem; // Increase the font size on hover
      }
    }
`;

  const itemsStyle = css`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `;

  const itemStyle = css`
    transition: color 0.3s ease;
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
  `;

  const HeaderStyle = css`
  font-weight: bold;
  font-size: 1.2rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  transition: font-size 0.3s ease; // Make sure transition is smooth
`;
  const dateStyle = css`
    font-size: 0.9rem;
    color: #999;
    transition: color 0.3s ease;
  `;

  const buttonStyle = css`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #444;
    transition: background-color 0.3s ease;
    &:hover {
      cursor: pointer;
      background-color: #555;
    }
  `;

  const buttonText = css`
    padding: 1rem;
    font-size: 1.2rem;
    color: #fff;
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
      <div css={itemsStyle}>
        <div className="header" css={HeaderStyle}>{renderHeader()}</div>
        {items.map((item) => (
          <div key={item.id} css={itemStyle}>
            <div css={titleStyle}>{item.title}</div>
            {item.date && <div css={dateStyle}>{item.date}</div>}
          </div>
        ))}
      </div>
      <div css={buttonStyle}>
        <div css={buttonText}>{type === 'event' ? 'View All Events' : 'View All Links'}</div>
      </div>
    </div>
  );
};

export default CardTemplate;
