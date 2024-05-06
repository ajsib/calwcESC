/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CardTemplate from './CardTemplate';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// Define CSS styles outside of the component for better reusability and performance
const styles = {
  actionSection: css`
    text-align: center;
    padding: 5rem 0;
    height: calc(100vh - 18rem);
    background-color: #FBFBFB;
  `,
  getStarted: css`
    font-size: 3rem;
    font-weight: normal;
  `,
  cardsContainer: (isMobile: boolean) => css`
    gap: ${isMobile ? '0.5rem' : '1rem'};
    display: flex;
    flex-direction: ${isMobile ? 'column' : 'row'};
    flex-wrap: wrap;
    justify-content: center;
  `
};

// Main component
const ActionSection = () => {
  const router = useRouter();
  const { locale } = router;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <section css={styles.actionSection}>
      <h1 css={styles.getStarted}>{locale === 'en' ? 'Get Started' : 'Rejoignez-nous'}</h1>
      <div css={styles.cardsContainer(isMobile)}>
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
