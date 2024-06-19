/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useWizard } from '../../IntakeContext';

const stepIndicatorStyle = css`
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #ccc;
`;

const stepStyle = css`
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    padding: 1rem 1.5rem;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`;

const circleStyle = (isActive: boolean) => css`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${isActive ? 'green' : 'black'};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-right: 1rem;
    font-size: 1.5rem;
    transition: all 0.3s ease;
`;

const labelStyle = css`
    font-size: 1.25rem;
`;

const StepIndicator = ({ currentPage } : { currentPage: number }) => {
    const { setPage } = useWizard();
    const steps = [
        { number: 1, label: 'General Info' },
        { number: 2, label: 'Description' },
        { number: 3, label: 'Links' },
        { number: 4, label: 'Review' },
    ];

    return (
        <div css={stepIndicatorStyle}>
            {steps.map((step) => (
                <div key={step.number} css={stepStyle} onClick={() => setPage(step.number)}>
                    <div css={circleStyle(step.number === currentPage)}>{step.number}</div>
                    <div css={labelStyle}>{step.label}</div>
                </div>
            ))}
        </div>
    );
};

export default StepIndicator;
