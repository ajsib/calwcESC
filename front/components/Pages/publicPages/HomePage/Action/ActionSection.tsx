/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CardTemplate from './CardTemplate';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

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

const cardsContainerStyle = (isMobile: boolean) => css`
  gap: ${isMobile ? '0.5rem' : '1rem'};
  display: flex;
  flex-direction: ${isMobile ? 'column' : 'row'};
  flex-wrap: wrap;
  justify-content: center;
`;

const ActionSection = () => {
  const router = useRouter();
  const { locale } = router;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial call to set isMobile based on window width

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <section css={actionSectionStyle}>
      <h1 css={getStartedStyle}>{locale === 'en' ? 'Get Started' : 'Rejoignez-nous'}</h1>
      <div css={cardsContainerStyle(isMobile)}>
        <CardTemplate
          title={locale === 'en' ? 'Already Running an Experiment?' : 'Déjà en cours d\'expérimentation ?'}
          subtitle={locale === 'en' ? 'View Your Dashboard' : 'Voir votre tableau de bord'}
          onClick={() => router.push(locale === 'en' ? '/dashboard' : '/tableau-de-bord')}
          isMobile={isMobile}
        />
        <CardTemplate
          title={locale === 'en' ? 'Ready to Begin an Experiment?' : 'Prêt à commencer une expérience ?'}
          subtitle={locale === 'en' ? 'Submit a Request' : 'Soumettre une demande'}
          onClick={() => router.push(locale === 'en' ? '/submit-request' : '/soumettre-demande')}
          isMobile={isMobile}
        />
      </div>
    </section>
  );
};

export default ActionSection;
