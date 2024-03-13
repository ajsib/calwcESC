/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CardTemplate from './CardTemplate';
import GridContainer from './Grid';


const titleStyle = css`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 3rem;
    margin-top: 1rem;
    margin-left: var(--margin);
    `;


export default function Cards() {
    return (
        <div>
            <h1 css={titleStyle}>Operational Expertise</h1>
            <GridContainer>
                <CardTemplate title="Experiment Consultation" 
                subtitle="Get the process started with our team to run an experiment." />
                <CardTemplate title="Knowledge Base" 
                subtitle="Explore our knowledge base to find information on past experiments, or reports." />
                <CardTemplate title="Active Experiments" 
                subtitle="See what is happening, what it’s related to and who is involved" />
                <CardTemplate title="Community Experimentation" 
                subtitle="Get in on the action, share ideas and collaborate." />
            </GridContainer>
            <CardTemplate title="Have any questions?" subtitle="Get in touch with us." />
        </div>
    )
}
