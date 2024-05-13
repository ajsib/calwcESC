/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Added router

const serviceContentStyle = css`
    width: calc(100% - (var(--margin) * 2)); 
    margin-left: auto;
    margin-right: auto;
`;

const textStyle = css`
    font-size: 1.2rem;
    margin-top: 1rem;
    line-height: 2rem;
    font-weight: 400;
`;

const titleStyle = css`
    font-size: 2rem;
    font-weight: 300;
    padding-bottom: 3rem;
    padding-top: 3rem;
`;

export default function ServiceContent() {
    const router = useRouter(); // Initialized router
    const { locale } = router; // Get current locale from router

    // Define translated content based on locale
    const Title = locale === 'en' ? <>What is Experimentation?</> : <>Qu&apos;est-ce que l&apos;expérimentation ?</>;
    const Text1 = locale === 'en' ? 
        <>Experimentation is a fundamental tool for force development in the Canadian Army, we seek to uncover untapped value in novel operational methods and systems so that our leaders can make informed decisions in advancing our capabilities.</> :
        <>L&apos;expérimentation est un outil fondamental pour le développement des forces dans l&apos;Armée canadienne. Nous cherchons à découvrir une valeur inexploitée dans des méthodes et des systèmes opérationnels nouveaux afin que nos dirigeants puissent prendre des décisions éclairées pour faire progresser nos capacités.</>;

    const Text2 = locale === 'en' ? 
        <>We believe in the power of collective wisdom. By democratizing access to the experimentation process we are calling upon members of the Canadian Army and extended allied defense family to showcase your unique ideas and contribute to the experimentation process. Lets Discover, Test and Demonstrate new ways to serve our beautiful country that we proudly call home.</> :
        <>Nous croyons en la puissance de la sagesse collective. En démocratisant l&apos;accès au processus d&apos;expérimentation, nous faisons appel aux membres de l&apos;Armée canadienne et à la famille de défense alliée élargie pour présenter vos idées uniques et contribuer au processus d&apos;expérimentation. Découvrons, testons et démontrons de nouvelles façons de servir notre beau pays que nous appelons fièrement notre foyer.</>;

    return (
        <div css={serviceContentStyle}>
            <h1 css={[titleStyle]}>{Title}</h1>
            <p css={textStyle}>
                {Text1}
            </p>
            <br />
            <p css={textStyle}>
                {Text2}
            </p>
        </div>
    );
}
