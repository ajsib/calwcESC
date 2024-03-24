/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CardTemplate from './CardTemplate';
import GridContainer from '../../../Shared/Grid';
import RightWedge from '@/components/UI/arrows/RightWedgeBold';


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
    return (
        <div>
            <h1 css={titleStyle}>Operational Expertise</h1>
            <GridContainer margin={200}>
                <CardTemplate title=<>Experiment <br></br> Consultation</>
                subtitle="Get the process started with our team to run an experiment." />
                <CardTemplate title=<>Knowledge <br></br> Base</> 
                subtitle="Explore our knowledge base to find information on past experiments, or reports." />
                <CardTemplate title=<>Active <br></br> Experiments</>
                subtitle="See what is happening, what it’s related to and who is involved" />
                <CardTemplate title=<>Community <br></br> Experimentation</>
                subtitle="Get in on the action, share ideas and collaborate." />
            </GridContainer>
            <p css={faqStyle}>Have any questions? See our FAQ <RightWedge size={15} /></p>
        </div>
    )
}
