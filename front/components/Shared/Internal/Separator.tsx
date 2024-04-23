/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const separatorStyle = css`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 1px;
    background-color: #ccc;
`;

const backgroundStyle = css`
    width: 100%;
`


export default function Separator() {
    return (
        <div css={backgroundStyle}>
         <div css={separatorStyle} />
        </div>
        
    );
}