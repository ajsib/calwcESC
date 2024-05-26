/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';

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
`;

const IntakePage = () => {
    const [page, setPage] = useState(1);

    const goForward = () => {
        setPage((prevPage) => Math.min(prevPage + 1, 3));
    };

    const goBack = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <div css={intakePageStyle}>
            <div css={intakePageContentStyle}>
                <div css={intakePageHeaderStyle}>
                    <h1>Intake</h1>
                </div>
                {page === 1 && <FirstPage goForward={goForward} goBack={goBack} />}
                {page === 2 && <SecondPage goForward={goForward} goBack={goBack} />}
                {page === 3 && <ThirdPage goForward={goForward} goBack={goBack} />}
            </div>
        </div>
    );
};

export default IntakePage;
