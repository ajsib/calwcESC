/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IntakeProps } from '../Types';
import { useState } from 'react';

const pageStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const formStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    padding: 1rem;
`;

const SecondPage = ({ goForward, goBack }: IntakeProps) => {
    const [masterQuestionList, setMasterQuestionList] = useState('');

    return (
        <div css={pageStyle}>
            <h1>Second Page</h1>
            <form css={formStyle}>
                <label>
                    Master Question List:
                    <input
                        type="text"
                        value={masterQuestionList}
                        onChange={(e) => setMasterQuestionList(e.target.value)}
                    />
                </label>
            </form>
            <button onClick={goBack}>Back</button>
            <button onClick={goForward}>Next</button>
        </div>
    );
};

export default SecondPage;
