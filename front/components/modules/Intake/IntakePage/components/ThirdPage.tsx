/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IntakeProps } from '../Types';

const pageStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const ThirdPage = ({ goForward, goBack }: IntakeProps) => {
    return (
        <div css={pageStyle}>
            <h1>Third Page</h1>
            <button onClick={goBack}>Back</button>
        </div>
    );
};

export default ThirdPage;