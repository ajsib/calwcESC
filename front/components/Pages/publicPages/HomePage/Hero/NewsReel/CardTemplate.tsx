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
    }
  `;

  const itemsStyle = css`
    width: 50%; // Increase width to accommodate two columns
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `;

  const itemStyle = css`
    transition: color 0.3s ease, opacity 0.3s ease;
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
    transition: font-size 0.3s ease;
  `;

  const dateStyle = css`
    font-size: 0.9rem;
    color: #999;
    transition: color 0.3s ease;
  `;

  const linkColumnStyle = css`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    opacity: 0; // Start with hidden links
    transition: opacity 0.3s ease;
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
      <div className="link-column" css={linkColumnStyle}>
        {items.map((item) => (
          <div key={item.id} css={itemStyle}>
            <div css={titleStyle}>{item.title}</div>
            {item.date && <div css={dateStyle}>{item.date}</div>}
          </div>
        ))}
        {/* "View All" now as the last link in the second column */}
        <div css={itemStyle}>
          <div css={titleStyle}>{type === 'event' ? 'View All Events' : 'View All Links'}</div>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;
