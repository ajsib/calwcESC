/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router'; 

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

const Navigation = () => {
  const router = useRouter();
  const { locale, asPath } = router;
  const toggleLocale = locale === 'en' ? 'fr' : 'en';
  const languageLabel = locale === 'en' ? 'Français' : 'English';  
  const Home = locale === 'en' ? 'Home' : 'Accueil'
  const About = locale === 'en' ? 'About' : 'Notre mission'
  const Services = locale === 'en' ? 'Services' : 'Nos services'
  const Login = locale === 'en' ? 'Login' : 'Se connecter'

  return (
    <nav css={navigationStyle}>
      <Link href="/" css={linkStyle}>{Home}</Link>
      <Link href="/about" css={linkStyle}>{About}</Link>
      <Link href="/services" css={linkStyle}>{Services}</Link>
      <Link href={asPath} locale={toggleLocale} css={linkStyle}>{languageLabel}</Link>
      <Link href="/login" css={linkStyle}>{Login}</Link>
    </nav>
  );
};

export default Navigation;
