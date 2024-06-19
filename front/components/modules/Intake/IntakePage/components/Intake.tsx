/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useWizard } from '../../IntakeContext';
import StepIndicator from './stages';
import ContactForm from './requestForms/RequestContact';
import DescriptionForm from './requestForms/RequestDescription';
import LinksForm from './requestForms/RequestLinks';
import ReviewForm from './requestForms/RequestReview';

const intakePageStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: #ebebeb;
    position: relative;
`;

const gradientStyle = css`
    width: 100%;
    height: calc((100vh - 68px) * 0.38);
    background: linear-gradient(to bottom, #00ff00, #006400);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

const wizardPlaceholderStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100% - 16rem); /* 8rem padding on each side */
    height: calc((100vh - 68px) - 8rem); /* 8rem padding on top and bottom */
    background-color: white;
    margin: 8rem;
    margin-bottom: 4rem;
    margin-top: 4rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 2;
    position: relative;
`;

const wizardContentStyle = css`
    display: flex;
    height: 100%;
    width: 100%;
`;

const inputSectionStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 1rem;
    width: 60%;
    height: calc(100% - 2rem);
`;

const infoSectionStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 1rem;
    width: 40%;
    height: calc(100% - 2rem);
`;

const buttonContainerStyle = css`
    display: flex;
    gap: 1rem;
    width: 100%;
`;

const buttonStyle = css`
    padding: 0.75rem;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    width: 50%;
`;

const moreInfoButtonStyle = css`
    padding: 0.75rem;
    border: none;
    color: black;
    cursor: pointer;
    font-size: 1.5rem;
    width: 100%;
    margin: 1rem 0;
    background-color: #ccc;
`;

const infoContentStyle = css`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
`;

const getRequestForm = (page: number) => {
    switch (page) {
        case 1:
            return <ContactForm />;
        case 2:
            return <DescriptionForm />;
        case 3:
            return <LinksForm />;
        case 4:
            return <ReviewForm />;
        default:
            return null;
    }
};

const IntakePage = () => {
    const { page, goForward, goBack } = useWizard();

    return (
        <div css={intakePageStyle}>
            <div css={gradientStyle}></div>
            <div css={wizardPlaceholderStyle}>
                <StepIndicator currentPage={page} />
                <div css={wizardContentStyle}>
                    <div css={inputSectionStyle}>
                        {getRequestForm(page)}
                    </div>
                    <div css={infoSectionStyle}>
                        <div css={infoContentStyle}>
                            <p>Info content for page {page} goes here</p>
                        </div>
                        <button css={moreInfoButtonStyle}>More Info</button>
                        <div css={buttonContainerStyle}>
                            <button css={[buttonStyle, { backgroundColor: 'black' }]} onClick={goBack}>Back</button>
                            <button css={[buttonStyle, { backgroundColor: 'var(--primary-color)' }]} onClick={goForward}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntakePage;
