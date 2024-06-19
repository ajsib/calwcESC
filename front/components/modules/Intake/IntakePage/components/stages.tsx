/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const stepIndicatorStyle = css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid #ccc;
`;

const stepStyle = css`
    display: flex;
    align-items: center;
    margin: 0 2rem;
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
    const steps = [
        { number: 1, label: 'General Info' },
        { number: 2, label: 'Question List' },
        { number: 3, label: 'Additional Info' },
        { number: 4, label: 'Review' },
    ];

    return (
        <div css={stepIndicatorStyle}>
            {steps.map((step) => (
                <div key={step.number} css={stepStyle}>
                    <div css={circleStyle(step.number === currentPage)}>{step.number}</div>
                    <div css={labelStyle}>{step.label}</div>
                </div>
            ))}
        </div>
    );
};

export default StepIndicator;
