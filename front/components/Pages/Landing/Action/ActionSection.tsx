// ./components/Pages/Landing/ActionSection/ActionSection.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CardTemplate from './CardTemplate';

const actionSectionStyle = css`
  text-align: center;
  padding: 2rem 0;
  background-color: #FBFBFB;
`;

const getStartedStyle = css`
  font-size: 2rem; 
  font-weight: normal;
  margin-bottom: 3rem; 
`;

const cardsContainerStyle = css`
  gap: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: var(--margin);
  // center the cards
  // justify-content: center;
`;

const ActionSection = () => (
  <section css={actionSectionStyle}>
    <h1 css={getStartedStyle}>Get Started</h1>
    <div css={cardsContainerStyle}>
      <CardTemplate
        title={<>Already Running <br /> an Experiment?</>}
        subtitle={<>View Your <br /> Dashboard</>}
      />
      <CardTemplate
        title={<>Ready to Begin <br /> an Experiment?</>}
        subtitle={<>Submit <br /> a Request</>}
      />
    </div>
  </section>
);

export default ActionSection;
