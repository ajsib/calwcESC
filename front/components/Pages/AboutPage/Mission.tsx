/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { titleStyle } from '@/styles/GlobalStyles';

const bodyStyle = css`
    font-size: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    margin-left: var(--margin);
    margin-right: var(--margin);
    `;

export default function Mission() {
    return (
        <div>
            <h1 css={titleStyle}>Our Mission</h1>
            <p css={bodyStyle}>
                The CA Experimentation Services Centre (ESC) is a section within the Canadian Land Warfare Centre (CALWC), located in Kingston, ON, and was established to produce empirical evidence to objectively inform subsequent decisions regarding proposed changes to land force operational capabilities. <br/>
                &nbsp; <br/>
                The ESC primary mission is to be the supporting organization that executes and facilitates experimentation and wargaming in support of Force Development. It is anticipated, expected and encouraged that formal and informal experimentation take place across the Canadian Forces. These events should be proposed for inclusion in the Army Experimentation Plan and successful submissions will be prioritized to receive ESC support. <br/>
                &nbsp; <br/>
                 While the ESC need not explicitly control or conduct all experimentation in the CA, the ESC is responsible for overseeing the conduct of all experimentation within the CA. As such, the ESC must be the first point of contact for any organization within the CA that wishes to conduct experimentation. This facilitates appropriate coordination and allocation of resources in support of CA FD efforts and allows for centralised tracking of experiments and their results.
            </p>
        </div>
    );
}