/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Define an interface for the props
interface SeparatorProps {
  marginLeft?: number;   // Optional left margin
  marginRight?: number;  // Optional right margin
  marginTop?: number;    // Optional top margin
  marginBottom?: number; // Optional bottom margin
}

const separatorStyle = css`
    width: 100%;
    height: 1px;
    background-color: #ccc;
`;

// Updated component to use the props
export default function Separator({ marginLeft, marginRight, marginTop, marginBottom }: SeparatorProps) {
    const backgroundStyle = css`
        width: 100%;
        margin-left: ${marginLeft}rem;
        margin-right: ${marginRight}rem;
        margin-top: ${marginTop}rem;
        margin-bottom: ${marginBottom}rem;
    `;

    return (
        <div css={backgroundStyle}>
         <div css={separatorStyle} />
        </div>
    );
}
