/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const separatorStyle = css`
    width: calc(100% - (var(--margin) * 2));
    margin-left: auto;
    margin-right: auto;
    height: 1px;
    background-color: var(--primary-color);
`;

const backgroundStyle = css`
    width: 100%;
    padding-top: 3rem;

`


export default function Separator() {
    return (
        <div css={backgroundStyle}>
         <div css={separatorStyle} />
        </div>
        
    );
}