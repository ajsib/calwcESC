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

const reviewField = css`
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
`;

const submitButton = css`
    padding: 0.5rem;
    font-size: 1rem;
    background-color: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
`;

const ReviewComponent = () => {
    const { experimentRequest } = useWizard();

    const handleSubmit = () => {
        console.log(experimentRequest);
    };

    return (
        <div css={formContainer}>
            <div css={fieldContainer}>
                <label htmlFor="name">Name:</label>
                <div css={reviewField}>{experimentRequest.name}</div>
            </div>
            <div css={fieldContainer}>
                <label htmlFor="unit">Unit:</label>
                <div css={reviewField}>{experimentRequest.unit}</div>
            </div>
            <div css={fieldContainer}>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <div css={reviewField}>{experimentRequest.phoneNumber}</div>
            </div>
            <div css={fieldContainer}>
                <label htmlFor="email">Email:</label>
                <div css={reviewField}>{experimentRequest.email}</div>
            </div>
            <div css={fieldContainer}>
                <label htmlFor="description">Description:</label>
                <div css={reviewField}>{experimentRequest.description}</div>
            </div>
            <div css={fieldContainer}>
                <label htmlFor="links">Links:</label>
                <div css={reviewField}>
                    {experimentRequest.links.map((link: string, index: number) => (
                        <div key={index}>{link}</div>
                    ))}
                </div>
            </div>
            <button css={submitButton} onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default ReviewComponent;
