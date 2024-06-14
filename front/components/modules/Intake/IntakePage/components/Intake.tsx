/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useWizard, WizardProvider } from '../../IntakeContext';

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
    height: calc((100vh - 68px)*0.38);
    background: linear-gradient(to bottom, #00ff00, #006400);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

const wizardPlaceholderStyle = css`
    display: flex;
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

const IntakePage = () => {
    const { page, goForward, goBack } = useWizard();

    return (
        <div css={intakePageStyle}>
            <div css={gradientStyle}></div>
            <div css={wizardPlaceholderStyle}>
                {/* Wizard content goes here */}
                <p>Wizard Placeholder</p>
            </div>
        </div>
    );
};

const App = () => (
    <WizardProvider>
        <IntakePage />
    </WizardProvider>
);

export default App;
