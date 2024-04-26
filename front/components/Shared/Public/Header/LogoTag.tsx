/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router'; 


const logoContainerStyle = css`
    display: flex;
    align-items: center;
    cursor: pointer; // Make it look clickable
`;

const logoImageStyle = css`
    height: 4rem;
    width: auto;
`;

const logoTextStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    height: 4rem;
    width: 8rem;
`;





const LogoTag = ({ disabled = false, ...props }) => {
    const router = useRouter()
    const { locale } = router
    const Acronym = locale === 'en' ? 'CALWC' : 'CGTAC'
  
    const handleClick = () => {
      if (!disabled) {
        router.push('/')
      }
    }
  
    return (
      <div css={logoContainerStyle} onClick={handleClick}>
        <img css={logoImageStyle} src="/images/logo-calwc.png" alt="Logo" />
        <span css={logoTextStyle}>{Acronym}</span>
      </div>
    )
  }
  
  export default LogoTag
