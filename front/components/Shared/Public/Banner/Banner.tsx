/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from "../Header/Header";
import { useEffect, useState } from 'react'

interface BannerProps {
    src: string;
    alt: string;
    bannerText: string;
    title: string;
}

export default function Banner({src, alt, bannerText, title}: BannerProps) {
    const [offsetY, setOffsetY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', checkMobile);
        checkMobile(); 
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobile);
          };
    }, []);

    const imageStyle = css`
        position: absolute;
        top: -4rem;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: translateY(${offsetY * 0.4}px);
        transition: transform 0s ease-out, height 0s;
        z-index: -1;
    `;

    const divStyle = css`
        position: absolute;
        display: flex;
        align-items: center;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4rem;
        background-color: var(--primary-color);
    `;

    const textStyle = css`
        color: var(--secondary-color);
        font-weight: bold;
        font-size: 1.8rem;
        margin-left: var(--margin);
        word-spacing: 0.3rem;
        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    `;

    const titleStyle = css`
        position: absolute;
        top: calc(50% - 2rem);
        left: var(--margin);
        color: var(--secondary-color);
        font-weight: bold;
        font-size: 3.3rem;
        z-index: 2;
        @media (max-width: 768px) {
            font-size: 2.5rem;
        }
    `;

    const headerStyle = css`
        position: relative;
        width: 100%;
        height: ${isMobile ? '35vh' : '63vh'};
    `;

    return (
        <div css={headerStyle}>
            <Header />
            <img css={imageStyle} src={src} alt={alt} />
            <h1 css={titleStyle}>{title}</h1>
            <div css={divStyle}><p css={textStyle}>{bannerText}</p></div>
        </div>
    );
}
