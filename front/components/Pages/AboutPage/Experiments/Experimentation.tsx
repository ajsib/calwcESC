/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import GridContainer from '@/components/Shared/Grid';
import CardTemplate from './CardTemplate';

const titleStyle = css`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 3rem;
    margin-top: 1rem;
    margin-left: var(--margin);
    `;


export default function Experimentation(){
    return (
        <div>
            <h1 css={titleStyle}>What is Experimentation?</h1>
            <GridContainer>
                <CardTemplate title="Card 1" image='/images/about/placeholder.png' subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
                <CardTemplate title="Card 2" image='/images/about/placeholder.png' subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
                <CardTemplate title="Card 3" image='/images/about/placeholder.png' subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
                <CardTemplate title="Card 4" image='/images/about/placeholder.png' subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            </GridContainer>
        </div>
    )
}