/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import GridContainer from '@/components/Shared/Grid';
import CardTemplate from './CardTemplate';
import { titleStyle } from '@/styles/GlobalStyles';



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