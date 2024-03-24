/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const aboutUsContentStyle = css`
    width: calc(100% - (var(--margin) * 2)); // 100% minus the left and right padding
    margin-left: auto;
    margin-right: auto;
`;

const titleStyle = css`
    font-size: 2rem;
    padding-bottom: 3rem;
    padding-top: 3rem;
    `;

const textStyle = css`
    font-size: 1.2rem;
    line-height: 2rem;
    margin-bottom: 2rem;
    `;


export default function AboutUsContent() {
    return (
        <div css={aboutUsContentStyle}>
            <h1 css={titleStyle}>Our Mission</h1>
            <p css={textStyle}>
                The CA Experimentation Services Centre (ESC) is a section within the Canadian Land Warfare Centre
                (CALWC), located in Kingston, ON, and was established to produce empirical evidence to objectively
                inform subsequent decisions regarding proposed changes to land force operational capabilities.
            </p>

            <p css={textStyle}>
                The ESC primary mission is to be the supporting organization that executes and facilitates
                experimentation and wargaming in support of Force Development. It is anticipated, expected and
                encouraged that formal and informal experimentation take place across the Canadian Forces. These events
                should be proposed for inclusion in the Army Experimentation Plan and successful submissions will be
                prioritized to receive ESC support.
            </p>
            <p css={textStyle}>
                While the ESC need not explicitly control or conduct all experimentation in the CA, the ESC is
                responsible for overseeing the conduct of all experimentation within the CA. As such, the ESC must be
                the first point of contact for any organization within the CA that wishes to conduct experimentation.
                This facilitates appropriate coordination and allocation of resources in support of CA FD efforts and
                allows for centralised tracking of experiments and their results.
            </p>
        </div>
    );
}