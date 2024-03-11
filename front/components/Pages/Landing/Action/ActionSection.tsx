// ./components/Pages/Landing/ActionSection/ActionSection.tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CardTemplate from './CardTemplate';

const actionSectionStyle = css`
  text-align: center;
  padding: 4rem 0;
  background-color: #FBFBFB;
`;

const getStartedStyle = css`
  font-size: 2rem; 
  font-weight: normal;
  margin-bottom: 3rem; 
`;

const cardsContainerStyle = css`
  display: flex;
  justify-content: center; 
  gap: 2rem; /
`;

const ActionSection = () => (
  <section css={actionSectionStyle}>
    <h1 css={getStartedStyle}>Get Started</h1>
    <div css={cardsContainerStyle}>
      <CardTemplate
        title="Already Running an Experiment?"
        subtitle="View Your Dashboard"
      />
      <CardTemplate
        title="Ready to Begin an Experiment?"
        subtitle="Submit a Request"
      />
    </div>
  </section>
);

export default ActionSection;
