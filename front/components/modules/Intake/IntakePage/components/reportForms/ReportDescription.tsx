/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useWizard } from '../../../IntakeContext';


const formContainer = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
`;

const fieldContainer = css`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    background-color: #ccc;
    padding: 1rem;
    gap: 0.5rem;
`;

const inputField = css`
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    height: 100%;
`;


const DescriptionForm = () => {
    const { experimentReport, setExperimentReport } = useWizard();

    return (
        <div css={formContainer}>
            <div css={fieldContainer}>
                <label htmlFor="description">Describe your project</label>
                <textarea id="description" css={inputField} onChange={(e) => setExperimentReport({...experimentReport, description: e.target.value})}/>
            </div>
        </div>
    );
};


export default DescriptionForm;