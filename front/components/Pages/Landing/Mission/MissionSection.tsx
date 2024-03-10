// ./components/Landing/Mission/MissionSection.tsx
/** @jsxImportSource @emotion/react */
import Card from '@/components/UI/Card';
import { css } from '@emotion/react';
import CardTemplate from './CardTemplate';

const missionStyle = css`
  padding-top: 5rem;
`;

const MissionSection = () => (
  <div css={missionStyle}>
    <CardTemplate
      imageSrc="/images/landing/landing2.png"
      title="About Us"
      text="The Canadian Army Experimentation Services Centre (ESC), part of the Canadian Land Warfare Centre (CALWC)
            in Kingston, Ontario, was founded to generate empirical evidence that informs decisions on proposed changes
            to land force operational capabilities."
    />
    <CardTemplate
      imageSrc="/images/landing/landing3.png"
      title="Our Services"
      text="The ESC supports experimentation and wargaming for Force Development. The Canadian Forces are encouraged to
            engage in both formal and informal experimentation and submit proposals for the Army Experimentation Plan.
            Selected submissions receive ESC support."
    />
  </div>
);

export default MissionSection;