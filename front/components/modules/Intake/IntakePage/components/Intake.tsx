/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useWizard, WizardProvider } from '../../IntakeContext';
import Page1 from './Intro';
import Page2 from './ProjectInfo';
import Page3 from './MQL';
import Page4 from './ExperimentType';
import Page5 from './StudyMethod';
import Page6 from './Review';
import Page7 from './Success';

const intakePageStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const intakePageContentStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    padding: 1rem;
`;

const intakePageHeaderStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
`;

const buttonContainerStyle = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 300px;
    margin-top: 2rem;
`;

const buttonStyle = css`
    padding: 0.5rem 1rem;
    border: none;
    background-color: #364132;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;
    &:hover {
        background-color: #2b332a;
    }
    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

const IntakePage = () => {
    const { page, goForward, goBack } = useWizard();

    const renderPage = () => {
        switch (page) {
            case 1:
                return <Page1 />;
            case 2:
                return <Page2 />;
            case 3:
                return <Page3 />;
            case 4:
                return <Page4 />;
            case 5:
                return <Page5 />;
            case 6:
                return <Page6 />;
            case 7:
                return <Page7 />;
            default:
                return <Page1 />;
        }
    };

    return (
        <div css={intakePageStyle}>
            <div css={intakePageContentStyle}>
                <div css={intakePageHeaderStyle}>
                    <h1>Intake</h1>
                </div>
                {renderPage()}
                <div css={buttonContainerStyle}>
                    <button onClick={goBack} css={buttonStyle} disabled={page <= 1}>Back</button>
                    <button onClick={goForward} css={buttonStyle} disabled={page >= 7}>Next</button>
                </div>
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
