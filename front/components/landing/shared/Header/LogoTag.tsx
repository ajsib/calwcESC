/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router'; 
import Image from 'next/image'; 

interface LogoTagProps {
  isScrolled?: boolean;
  disabled?: boolean;
}


const logoContainerStyle = css`
    display: flex;
    align-items: center;
    cursor: pointer; 
    transition: height 0.3s ease-in-out; 
`;

const logoImageStyle = css`
    height: 4rem;
    width: auto;
    transition: height 0.3s ease-in-out;
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
    transition: height 0.3s ease-in-out;
`;


const LogoTag = ({ isScrolled, disabled = false }: LogoTagProps) => {
  const router = useRouter()
  const { locale } = router
  const Acronym = locale === 'en' ? 'CALWC' : 'CGTAC'
  const logoHeight = isScrolled ? '3rem' : '4rem'

  const handleClick = () => {
      router.push('/')
  }

  return (
    <div css={logoContainerStyle} onClick={handleClick}>
      <img
        css={[logoImageStyle, { height: logoHeight }]} 
        src="/calwc-esc/images/logo-calwc.png"  
        alt="Logo" 
        // width={64} 
        // height={64} 
      />
      <span css={[logoTextStyle, { height: logoHeight }]}>
        {Acronym}
      </span>
    </div>
  )
}

export default LogoTag;