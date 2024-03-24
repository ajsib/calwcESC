/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const separatorStyle = css`
    width: calc(100% - (var(--margin) * 2));
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
    height: 1px;
    background-color: var(--primary-color);
`;


export default function Separator() {
    return (
        <div css={separatorStyle} />
    );
}