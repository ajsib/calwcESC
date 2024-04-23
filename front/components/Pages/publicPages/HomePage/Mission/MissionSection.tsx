/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CardTemplate from './CardTemplate';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const missionStyle = css`
  padding-top: 2rem;
  background-color: var(--secondary-color);
`;

const MissionSection = () => {
  const router = useRouter();
  const { locale } = router;
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => setOffsetY(window.scrollY);
  const checkMobile = () => setIsMobile(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    checkMobile(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const Title1 = locale === 'en' ? 'About Us' : 'À Propos De Nous';
  const Title2 = locale === 'en' ? 'Our Services' : 'Nos Services';
  const Text1 = locale === 'en' ? 
    "The Experimentation Services Centre (ESC), part of the Canadian Army Land Warfare Centre (CALWC) is located in Kingston, Ontario. Our mission is generating empirical evidence that informs decisions on proposed changes to land force operational capabilities." : 
    "Le Centre de Services d'Expérimentation (CSE), faisant partie du Centre de Guerre Terrestre de l'Armée Canadienne (CGTAC), est situé à Kingston, Ontario. Notre mission? Vous apporter des éléments empiriques informant les décisions sur les changements proposés aux capacités opérationnelles des forces terrestres.";

  const Text2 = locale === 'en' ? 
    "The ESC engages and enables experimentation for Force Development. Members of the Canadian Forces engage formally through our centre and informally through community experimentation. Exploring innovative solutions enhances readiness and adaptability across the CAF." : 
    "L'CSE engage et facilite l'expérimentation pour le développement des forces. Les membres des Forces canadiennes y participent formellement à travers notre centre et informellement à travers l'expérimentation communautaire. L'exploration de solutions innovantes renforce la préparation et l'adaptabilité au sein des FAC.";

  return (
    <div css={missionStyle}>
      <div onClick={() => router.push('/about')}>
        <CardTemplate
          imageSrc="/images/landing/landing2.png"
          title={Title1}
          text={Text1}
          order={0}
          isMobile={isMobile}
        />
      </div>
      <div onClick={() => router.push('/services')}>
        <CardTemplate
          imageSrc="/images/landing/landing3.png"
          title={Title2}
          text={Text2}
          order={1}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
};

export default MissionSection;
