/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CardTemplate from './CardTemplate';
import GridContainer from '@/components/Shared/Grid'


const titleStyle = css`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 3rem;
    margin-top: 1rem;
    margin-left: var(--margin);
    `;

const parentStyle = css`
    padding-bottom: 4rem;    
`;


export default function Cards() {
    return (
        <div css={parentStyle}>
          <h1 css={titleStyle}>Publications</h1>
          <GridContainer margin={100}>
            <CardTemplate 
                title={<>Experimentation <br/> Handbook</>}
                subtitle="Get the process started with our team to run an experiment." 
                backgroundImage='/images/about/pub1.png'
            />
            <CardTemplate 
                title={<>Data <br/> Insights</>}
                subtitle="Dive into analytics and insights from our latest experiments." 
                backgroundImage='/images/about/pub4.png'
            />
            <CardTemplate 
                title={<>Controlled <br/> Trials</>}
                subtitle="Understanding the methodology behind successful controlled trials." 
                backgroundImage='/images/about/pub3.png'
            />
            <CardTemplate 
                title={<>Innovation <br/> Frameworks</>}
                subtitle="Frameworks to foster innovation and creativity in your experiments." 
                backgroundImage='/images/about/pub5.png'
            />
          </GridContainer>
        </div>
    )
}
