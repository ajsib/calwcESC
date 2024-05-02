/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface LinkItem {
  id: string;
  title: string;
  url: string;
}

interface ImportantLinksProps {
  links: LinkItem[];
}

const ImportantLinks: React.FC<ImportantLinksProps> = ({ links }) => {


  const linksContainerStyle = css`
    display: flex;
    width: 100%;
    padding: 1rem;
    background: linear-gradient(to bottom right, rgba(51, 51, 51, 0.8), transparent),
                linear-gradient(to top left, rgba(51, 51, 51, 0.8), transparent);
    transition: background 0.3s ease, transform 0.3s ease;
    transform: translateX(20%);
    &:hover {
      background: linear-gradient(to bottom right, rgba(51, 51, 51, 0.9), transparent),
                  linear-gradient(to top left, rgba(51, 51, 51, 0.9), transparent),
                  #333;
      transform: translateX(0);
    }
  `;

  const linkStyle = css`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 2.20rem;
  `;

  const linkItemStyle = css`
    transition: color 0.3s ease;
    &:hover {
      cursor: pointer;
      color: #ff9900;
      text-decoration: underline;
    }
  `;

  const linkTitleStyle = css`
    font-weight: bold;
    padding-right: 1rem;
    cursor: pointer; /* Add cursor pointer */
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

  const titleStyle = css`
    font-size: 1.5rem;
    font-weight: bold;
    // margin-bottom: 1rem;
  `;

  const handleLinkClick = (url: string) => {
    window.location.href = url;
  };

  return (
      <div css={linksContainerStyle}>
        <div css={linkStyle}>
          <div css={titleStyle}>Important Links</div>
          {links.map((link) => (
            <div key={link.id} css={linkItemStyle} onClick={() => handleLinkClick(link.url)}>
              <div css={linkTitleStyle}>{link.title}</div>
            </div>
          ))}
        </div>
        <div css={buttonStyle}>
          <div css={buttonText}>View All Links</div>
        </div>
      </div>
  );
};

export default ImportantLinks;
