/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CardTemplate from './CardTemplate';
import GridContainer from '../../../Shared/Grid';
import { FiArrowRight } from 'react-icons/fi';


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
    transition: 0.3s ease;
    &:hover {
        text-decoration: underline;
        svg {
            transform: translateX(5px); // Moves the arrow to the right on hover
        }
    }
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
            <p css={faqStyle}>Have any questions? Visit our FAQ <FiArrowRight /></p>
        </div>
    )
}
