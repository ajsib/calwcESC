/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const serviceContentStyle = css`
    width: calc(100% - (var(--margin) * 2)); // 100% minus the left and right padding
    margin-left: auto;
    margin-right: auto;
`;

const titleStyle = css`
    font-size: 2rem;
    padding-bottom: 3rem;
    padding-top: 3rem;
    `;

const textStyle = css`
    font-size: 1.2rem;
    margin-bottom: 3rem;
    `;


export default function ServiceContent() {
    return (
        <div css={serviceContentStyle}>
            <h1 css={titleStyle}>What is Experimentation?</h1>
            <p css={textStyle}>
                Experimentation is a fundamental tool for force development in the Canadian Army, we seek to uncover untapped value in novel operational methods and systems so that our leaders can make informed decisions in advancing our capabilities.
            </p>
            <br />
            <p css={textStyle}>
                We believe in the power of collective wisdom. By democratizing access to the experimentation process we are calling upon members of the Canadian Army and extended allied defense family to showcase your unique ideas and contribute to the experimentation process. Lets Discover, Test and Demonstrate new ways to serve our beautiful country that we proudly call home.
            </p>
        </div>
    );
}