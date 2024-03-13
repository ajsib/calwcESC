// ./components/Shared/Banner/Banner.tsx
/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from "../Header/Header";


const imageStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const divStyle = css`
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10%; /* Adjust as needed */
    background-color: var(--primary-color);
`;

const textStyle = css`
    color: var(--secondary-color);
    font-weight: bold;
    font-size: 1.5rem;
    margin-left: var(--margin); /* Adjust as needed */
`;

const titleStyle = css`
    position: absolute;
    top: 50%; /* Adjust as needed */
    left: var(--margin); /* Adjust as needed */
    color: var(--secondary-color);
    font-weight: bold;
    font-size: 3rem;
    z-index: 2;
`;


interface BannerProps {
    src: string;
    alt: string;
    bannerText: string;
    title: string;
}


const headerStyle = css`
    position: relative;
    width: 100%;
    height: 400px;
`;


export default function Banner({
    src,
    alt,
    bannerText,
    title
}: BannerProps) {
    return (
        <div css={headerStyle}>
            <Header />
            <img css={imageStyle} src={src} alt={alt} />
            <h1 css={titleStyle}>{title}</h1>
            <div css={divStyle}><p css={textStyle}>{bannerText}</p></div>
        </div>
    );
}