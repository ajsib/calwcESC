/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CardTemplate from './CardTemplate';
import GridContainer from '../../../Shared/Grid';
import RightWedge from '@/components/UI/arrows/RightWedgeBold';
import { useRouter } from 'next/router'; // Added router

const titleStyle = css`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 3rem;
    margin-top: 1rem;
    margin-left: var(--margin);
`;

const faqStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--primary-color);
    cursor: pointer;
    margin-top: 3rem;
    margin-bottom: 3rem;
    gap: 1rem;
    text-decoration: none; 
    transition: text-decoration 0.3s ease, transform 0.3s ease;

    svg {
        transition: transform 0.3s ease; // Ensure the SVG has the transition
    }

    &:hover {
        text-decoration: underline; 
        svg {
            transform: translateX(5px); 
        }
    }
`;

export default function OperationsContent() {
    const router = useRouter(); // Initialized router
    const { locale } = router; // Get current locale from router

    // Define translated title based on locale
    const Title = locale === 'en' ? <>Operational Expertise</> : <>Expertise Opérationnelle</>;

    return (
        <div>
            <h1 css={titleStyle}>{Title}</h1>
            <GridContainer margin={10}>
                <CardTemplate
                    title={locale === 'en' ? <>Experiment <br /> Consultation</> : <>Consultation <br /> d&apos;expérimentation</>}
                    subtitle={locale === 'en' ? <>Get the process started with our team to run an experiment.</> : <>Commencez le processus avec notre équipe pour mener une expérience.</>}
                />
                <CardTemplate
                    title={locale === 'en' ? <>Knowledge <br /> Base</> : <>Base de <br /> connaissances</>}
                    subtitle={locale === 'en' ? <>Explore our knowledge base to find information on past experiments, or reports.</> : <>Explorez notre base de connaissances pour trouver des informations sur les expériences passées ou les rapports.</>}
                />
                <CardTemplate
                    title={locale === 'en' ? <>Active <br /> Experiments</> : <>Expériences <br /> Actives</>}
                    subtitle={locale === 'en' ? <>See what is happening, what it&apos;s related to and who is involved</> : <>Voyez ce qui se passe, à quoi cela est lié et qui est impliqué</>}
                />
                <CardTemplate
                    title={locale === 'en' ? <>Community <br /> Experimentation</> : <>Expérimentation <br /> Communautaire</>}
                    subtitle={locale === 'en' ? <>Get in on the action, share ideas and collaborate.</> : <>Participez à l&apos;action, partagez des idées et collaborez.</>}
                />
            </GridContainer>
            <p css={faqStyle}>{locale === 'en' ? <>Have any questions? See our FAQ</> : <>Vous avez des questions ? Consultez notre FAQ</>} <RightWedge size={15} /></p>
        </div>
    )
}
