/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Table from './Table';
import { titleStyle } from '@/styles/GlobalStyles';
import { useRouter } from 'next/router'; // Added router

const divStyle = css`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--primary-color);
`;

const statStyle = css`
    font-size: 4rem;
    font-weight: thin;
`;

const textStyle = css`
    text-align: center;
    margin-top: 1rem;
`;

export default function Impact() {
    const router = useRouter(); // Initialized router
    const { locale } = router; // Get current locale from router

    // Define translated title and stats based on locale
    const Title = locale === 'en' ? "Our Impact" : "Notre Impact";
    const ExperimentsStat = locale === 'en' ? "Open Experiments" : "Expériences Ouvertes";
    const NationsStat = locale === 'en' ? "Partner Nations" : "Nations Partenaires";
    const PublicationsStat = locale === 'en' ? "Publications" : "Publications";
    const FamilyStat = locale === 'en' ? "Defence Family" : "Famille de Défense";

    return (
        <div>
            <h1 css={titleStyle}>{Title}</h1>
            <Table>
                <div css={divStyle}>
                    <p css={statStyle}>10</p>
                    <p css={textStyle}>{ExperimentsStat}</p>
                </div>
                <div css={divStyle}>
                    <p css={statStyle}>5</p>
                    <p css={textStyle}>{NationsStat}</p>
                </div>
                <div css={divStyle}>
                    <p css={statStyle}>41</p>
                    <p css={textStyle}>{PublicationsStat}</p>
                </div>
                <div css={divStyle}>
                    <p css={statStyle}>1</p>
                    <p css={textStyle}>{FamilyStat}</p>
                </div>
            </Table>
        </div>
    )
}
