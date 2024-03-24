/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const footerStyle = css`
  width: 100%;
  padding: 2rem 0;
  background: var(--primary-color);
  color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem; 
  text-align: center; 

  b {
    font-weight: normal;
    color: #c5c6c7; 
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer css={footerStyle}>
      {currentYear} &nbsp;<b>Canadian Army Land Warfare Centre&nbsp;</b> — &nbsp;<b>Experimentation Services Centre</b>
    </footer>
  );
};

export default Footer;
