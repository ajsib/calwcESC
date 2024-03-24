/** @jsxImportSource @emotion/react */
import Card from '@/components/UI/Card';
import { css } from '@emotion/react';
import CardTemplate from './CardTemplate';
import { useRouter } from 'next/router';

const missionStyle = css`
  padding-top: 5rem;
  background-color: var(--secondary-color);
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
      <div onClick={handleServicesClick}>
        <CardTemplate

          imageSrc="/images/landing/landing2.png"
          title="Our Services"
          text="The ESC engages and enables experimentation for Force Development. 
                Members of the Canadian Forces engage formally through our centre
                and informally through community experimentation. Exploring innovative solutions enhances readiness and adaptability across the CAF."
          order={0}
        />
      </div>
      <div onClick={handleAboutClick}>
        <CardTemplate
          imageSrc="/images/landing/landing3.png"          
          title="About Us"
          text="The Experimentation Services Centre (ESC), part of the Canadian Army Land Warfare Centre (CALWC) is located
              in Kingston, Ontario. Our mission is generating empirical evidence that informs decisions on proposed changes
              to land force operational capabilities."
          order={0}
        />
      </div>
    </div>
  );
};

export default MissionSection;
