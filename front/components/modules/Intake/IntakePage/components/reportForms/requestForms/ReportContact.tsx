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
`;

const ContactForm = () => {
    const { experimentRequest, setExperimentRequest } = useWizard();
    return (
        <div css={formContainer}>
            <div css={fieldContainer}>
                <label htmlFor="unit">What unit are you with?</label>
                <input type="text" id="unit" css={inputField} onChange={(e) => setExperimentRequest({...experimentRequest, unit: e.target.value})}/>
            </div>
            <div css={fieldContainer}>
                <label htmlFor="phone">What is your phone number?</label>
                <input type="text" id="phone" css={inputField} onChange={(e) => setExperimentRequest({...experimentRequest, phoneNumber: e.target.value})}/>
            </div>
            <div css={fieldContainer}>
                <label htmlFor="email">What is your email?</label>
                <input type="text" id="email" css={inputField} value={experimentRequest.email} />
            </div>
        </div>
    );
};


export default ContactForm;
