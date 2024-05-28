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

const FirstPage = ({ goForward, goBack }: IntakeProps) => {
    const [experimentType, setExperimentType] = useState('');

    return (
        <div css={pageStyle}>
            <h1>First Page</h1>
            <form css={formStyle}>
                <label>
                    Type of Experiment:
                    <select value={experimentType} onChange={(e) => setExperimentType(e.target.value)}>
                        <option value="">Select...</option>
                        <option value="general">General</option>
                        <option value="simulation">Simulation</option>
                        <option value="survey">Survey</option>
                        <option value="caseStudy">Case Study</option>
                    </select>
                </label>
            </form>
            <button onClick={goForward}>Next</button>
        </div>
    );
};

export default FirstPage;
