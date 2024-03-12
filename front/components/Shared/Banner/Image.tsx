/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const imageStyle = css`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const divStyle = css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: var(--primary-color);
    `

const textStyle = css`
    color: var(--secondary-color);
    font-weight: bold;
    font-size: 1.5rem;
    `

interface ImageProps {
    src: string;
    alt: string;
    bannerText: string;
}

export default function Image({
    src,
    alt,
    bannerText
}: ImageProps) {
    return(
        <>
            <img css={imageStyle} src={src} alt={alt} />
            <div css={divStyle}><p css={textStyle}>{bannerText}</p></div>
        </>
    )
}