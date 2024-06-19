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

const TextAreaField = css`
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    height: 100px;
`;

const QuestionsForm = () => {
    const { experimentReport, setExperimentReport } = useWizard();
    return (
        <div css={formContainer}>
            <div css={fieldContainer}>
                <label htmlFor="questions">Questions</label>
                <textarea
                    id="questions"
                    css={TextAreaField}
                    onChange={(e) =>
                        setExperimentReport({
                            ...experimentReport,
                            questions: e.target.value,
                        })
                    }
                />
            </div>
        </div>
    );
};


export default QuestionsForm;