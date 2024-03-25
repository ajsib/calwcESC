/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Table from './Table';
import { titleStyle } from '@/styles/GlobalStyles';


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
    font-size: 1.5rem;
    font-weight: bold;
    color: blue;
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
                        <p css={statStyle}>25</p>
                        <p css={textStyle}>Countries Served</p>
                    </div>
                    <div css={divStyle}>
                        <p css={statStyle}>18</p>
                        <p css={textStyle}>Of the top 20 defense companies served</p>
                    </div>
                    <div css={divStyle}>
                        <p css={statStyle}>21</p>
                        <p css={textStyle}>Of the top 25 global aerospace companies served</p>
                    </div>
                    <div css={divStyle}>
                        <p css={statStyle}>500</p>
                        <p css={textStyle}>A&D Experts</p>
                    </div>
            </Table>
        </div>
    )
}