/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const titleStyle = css`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 3rem;
    margin-top: 1rem;
    margin-left: var(--margin);
    `;

export default function Impact(){
    return (
        <div>
            <h1 css={titleStyle}>Our Impact</h1>
        </div>
    )
}