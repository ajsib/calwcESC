/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router'; // Added router

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
    margin: 0 0.5rem;
  }

  p {
    margin-left: 0.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;


const Footer = () => {
  const router = useRouter(); // Initialized router
  const { locale } = router; // Get current locale from router

  const currentYear = new Date().getFullYear();
  // Define translated text based on locale
  const OrganizationName = locale === 'en' ? <>Canadian Army Land Warfare Centre</> : <>Centre de Guerre Terrestre de l&apos;Armée Canadienne</>;
  const ServiceCenterName = locale === 'en' ? <>Experimentation Services Centre</> : <>Centre de Services d&apos;Expérimentation</>;

  return (
    <footer css={footerStyle}>
      <p>{currentYear}</p> &nbsp;<b>{OrganizationName}&nbsp;</b> — &nbsp;<b>{ServiceCenterName}</b>
    </footer>
  );
};

export default Footer;
