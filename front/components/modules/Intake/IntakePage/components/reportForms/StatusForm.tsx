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

const buttonContainer = css`
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
`;

const button = css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    background-color: #eee;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
    }
`;

const StatusForm = () => {
    const { experimentReport, setExperimentReport } = useWizard();

    const setStatus = (status: string) => {
        setExperimentReport({ ...experimentReport, status });
    };

    return (
        <div css={formContainer}>
            <div css={buttonContainer}>
                <button css={button} onClick={() => setStatus('Planning')}>Planning</button>
                <button css={button} onClick={() => setStatus('In Progress')}>In Progress</button>
                <button css={button} onClick={() => setStatus('Completed')}>Completed</button>
            </div>
        </div>
    );
};

export default StatusForm;
