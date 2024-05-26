/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router'; 
import { useAuth } from '@/globalContexts/authContext'; // Import the useAuth hook

const navigationStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50vw;
  z-index: 10;
`;

const linkStyle = css`
  color: var(--secondary-color);
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none !important;
  &:hover {
    text-decoration: underline !important;
  }
`;

const buttonStyle = css`
  color: var(--secondary-color);
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline !important;
    cursor: pointer;
  }
`;

const Navigation = () => {
  const router = useRouter();
  const { locale, asPath } = router;
  const { person, logout } = useAuth(); // Get person and logout function from useAuth hook
  const toggleLocale = locale === 'en' ? 'fr' : 'en';
  const languageLabel = locale === 'en' ? 'Français' : 'English';  
  const Home = locale === 'en' ? 'Home' : 'Accueil'
  const About = locale === 'en' ? 'About' : 'Notre mission'
  const Services = locale === 'en' ? 'Services' : 'Nos services'
  const Login = locale === 'en' ? 'Login' : 'Se connecter'
  const Logout = locale === 'en' ? 'Logout' : 'Se deconnecter'

  return (
    <nav css={navigationStyle}>
      <Link href="/" css={linkStyle}>{Home}</Link>
      <Link href="/about" css={linkStyle}>{About}</Link>
      <Link href="/services" css={linkStyle}>{Services}</Link>
      <Link href={asPath} locale={toggleLocale} css={linkStyle}>{languageLabel}</Link>
      {person ? (
        <button css={buttonStyle} onClick={logout}>{Logout}</button>
      ) : (
        <Link href="/login" css={linkStyle}>{Login}</Link>
      )}
    </nav>
  );
};

export default Navigation;
