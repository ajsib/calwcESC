/** @jsxImportSource @emotion/react */
import Card from '@/components/UI/Card';
import { css } from '@emotion/react';
import CardTemplate from './CardTemplate';
import { useRouter } from 'next/router';

const missionStyle = css`
  padding-top: 5rem;
`;

const MissionSection = () => {
  const router = useRouter();
  
  const handleServicesClick = () => {
    router.push('/services');
  };

  const handleAboutClick = () => {
    router.push('about')
  }

  return (
    <div css={missionStyle}>
      <div onClick={handleAboutClick}>
        <CardTemplate
          imageSrc="/images/landing/landing2.png"
          title="About Us"
          text="The Canadian Army Experimentation Services Centre (ESC), part of the Canadian Land Warfare Centre (CALWC)
              in Kingston, Ontario, was founded to generate empirical evidence that informs decisions on proposed changes
              to land force operational capabilities."
          order={0}
        />
      </div>
      <div onClick={handleServicesClick}>
        <CardTemplate
          imageSrc="/images/landing/landing3.png"
          title="Our Services"
          text="The ESC supports experimentation and wargaming for Force Development. The Canadian Forces are encouraged to
              engage in both formal and informal experimentation and submit proposals for the Army Experimentation Plan.
              Selected submissions receive ESC support."
          order={0}
        />
      </div>
    </div>
  );
};

export default MissionSection;
