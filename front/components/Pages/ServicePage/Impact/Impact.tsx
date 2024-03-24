/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Table from './Table';

const titleStyle = css`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 3rem;
    margin-top: 1rem;
    margin-left: var(--margin);
    `;


const divStyle = css`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--primary-color);
    `;

const statStyle = css`
    font-size: 4rem;
    font-weight: thin;
    `;
const textStyle = css`
    text-align: center;
    margin-top: 1rem;
    `;

export default function Impact(){
    return (
        <div>
            <h1 css={titleStyle}>Our Impact</h1>
            <Table>
                    <div css={divStyle}>
                        <p css={statStyle}>10</p>
                        <p css={textStyle}>Open Experiments</p>
                    </div>
                    <div css={divStyle}>
                        <p css={statStyle}>5</p>
                        <p css={textStyle}>Partner Nations</p>
                    </div>
                    <div css={divStyle}>
                        <p css={statStyle}>41</p>
                        <p css={textStyle}>Publications</p>
                    </div>
                    <div css={divStyle}>
                        <p css={statStyle}>1</p>
                        <p css={textStyle}>Defense Family</p>
                    </div>
            </Table>
        </div>
    )
}