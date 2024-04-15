/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router'; // Added router

const aboutUsContentStyle = css`
    width: calc(100% - (var(--margin) * 2)); 
    margin-left: auto;
    margin-right: auto;
`;

const titleStyle = css`
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 3rem;
    padding-top: 3rem;
`;

const textStyle = css`
    font-size: 1.2rem;
    line-height: 2rem;
    margin-bottom: 2rem;
`;

export default function AboutUsContent() {
    const router = useRouter(); // Initialized router
    const { locale } = router; // Get current locale from router

    // Define translated text for each paragraph based on locale
    const Text1 = locale === 'en' ? (
        <>
            The CA Experimentation Services Centre (ESC) is a section within the Canadian Land Warfare Centre
            (CALWC), located in Kingston, ON, and was established to produce empirical evidence to objectively
            inform subsequent decisions regarding proposed changes to land force operational capabilities.
        </>
    ) : (
        <>
            Le Centre de Services d'Expérimentation (ESC) de l'AC est une section au sein du Centre de Guerre Terrestre Canadien
            (CGTC), situé à Kingston, en Ontario, et a été créé pour produire des preuves empiriques afin d'informer de manière
            objective les décisions ultérieures concernant les changements proposés aux capacités opérationnelles des forces terrestres.
        </>
    );

    const Text2 = locale === 'en' ? (
        <>
            The ESC primary mission is to be the supporting organization that executes and facilitates
            experimentation and wargaming in support of Force Development. It is anticipated, expected and
            encouraged that formal and informal experimentation take place across the Canadian Forces. These events
            should be proposed for inclusion in the Army Experimentation Plan and successful submissions will be
            prioritized to receive ESC support.
        </>
    ) : (
        <>
            La mission principale de l'ESC est d'être l'organisation de soutien qui exécute et facilite l'expérimentation
            et les jeux de guerre au soutien du développement des forces. Il est prévu, attendu et encouragé que des
            expérimentations formelles et informelles aient lieu au sein des Forces canadiennes. Ces événements doivent
            être proposés pour inclusion dans le Plan d'expérimentation de l'Armée et les soumissions réussies seront
            priorisées pour recevoir le soutien de l'ESC.
        </>
    );

    const Text3 = locale === 'en' ? (
        <>
            While the ESC need not explicitly control or conduct all experimentation in the CA, the ESC is
            responsible for overseeing the conduct of all experimentation within the CA. As such, the ESC must be
            the first point of contact for any organization within the CA that wishes to conduct experimentation.
            This facilitates appropriate coordination and allocation of resources in support of CA FD efforts and
            allows for centralized tracking of experiments and their results.
        </>
    ) : (
        <>
            Bien que l'ESC n'ait pas besoin de contrôler ou de mener explicitement toutes les expérimentations dans l'AC,
            l'ESC est responsable de superviser la conduite de toutes les expérimentations au sein de l'AC. En tant que tel,
            l'ESC doit être le premier point de contact pour toute organisation au sein de l'AC qui souhaite mener une expérimentation.
            Cela facilite la coordination appropriée et l'allocation des ressources en soutien aux efforts de FD de l'AC et permet
            le suivi centralisé des expériences et de leurs résultats.
        </>
    );

    const Head = locale === 'en' ? 'Our Mission' : 'Notre mission';

    return (
        <div css={aboutUsContentStyle}>
            <h1 css={titleStyle}>{Head}</h1>
            <p css={textStyle}>
                {Text1}
            </p>
            <p css={textStyle}>
                {Text2}
            </p>
            <p css={textStyle}>
                {Text3}
            </p>
        </div>
    );
}
