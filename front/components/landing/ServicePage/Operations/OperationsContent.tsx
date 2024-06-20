/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CardTemplate from './CardTemplate';
import GridContainer from '@/components/landing/shared//Grid';
import RightWedge from '@/components/UI/arrows/RightWedgeBold';
import { useRouter } from 'next/router'; // Added router
import { useState, useEffect } from 'react';

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

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }

    &:hover {
        text-decoration: underline; 
        svg {
            transform: translateX(5px); 
        }
    }
`;

const faqContainerStyle = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function OperationsContent() {
    const router = useRouter(); // Initialized router
    const { locale } = router; // Get current locale from router
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial call to set isMobile based on window width

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run effect only once on mount

    // Define translated title based on locale
    const Title = locale === 'en' ? <>Operational Expertise</> : <>Expertise Opérationnelle</>;

    return (
        <div>
            <h1 css={titleStyle}>{Title}</h1>
            <GridContainer margin={isMobile ? 1 : 10}>
                <CardTemplate
                    title={locale === 'en' ? <>Research and <br /> Document Review</> : <>Consultation <br /> d&apos;expérimentation</>}
                    subtitle={locale === 'en' ? <>We will research your topic and review existing documentation for you.</> : <>Commencez le processus avec notre équipe pour mener une expérience.</>}
                />
                <CardTemplate
                    title={locale === 'en' ? <>Conduct an <br /> Experiment</> : <>Base de <br /> connaissances</>}
                    subtitle={locale === 'en' ? <>We will plan and conduct the needed experiment or campaign.</> : <>Explorez notre base de connaissances pour trouver des informations sur les expériences passées ou les rapports.</>}
                />
                <CardTemplate
                    title={locale === 'en' ? <>Consolidate and <br /> Report</> : <>Expériences <br /> Actives</>}
                    subtitle={locale === 'en' ? <>We will distill conclusions from data and make it presentable for appropriate stakeholders.</> : <>Voyez ce qui se passe, à quoi cela est lié et qui est impliqué</>}
                />
                <CardTemplate
                    title={locale === 'en' ? <>Support for <br /> Any Stage</> : <>Expérimentation <br /> Communautaire</>}
                    subtitle={locale === 'en' ? <>We are here to assist anywhere in the process, advise, or connect you to resources.</> : <>Participez à l&apos;action, partagez des idées et collaborez.</>}
                />
            </GridContainer>
            <div css={faqContainerStyle}>
                <p css={faqStyle}>
                    {locale === 'en' ? <>Have any questions? See our FAQ</> : <>Vous avez des questions ? Consultez notre FAQ</>}
                    <RightWedge size={15} />
                </p>
            </div>
        </div>
    )
}
