/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CardTemplate from './CardTemplate';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '@/globalContexts/authContext'; // Import the useAuth hook

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
  cardsContainer: (isMobile : boolean) => css`
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
  const { loggedIn } = useAuth(); // Get the person from useAuth hook
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

  const handleCardClick = (route: string, queryParam: string | string[] | undefined) => {
    if (loggedIn) {
      router.push(route);
    } else {
      router.push(`/login?redirect=${queryParam}`);
    }
  };

  return (
    <section css={styles.actionSection}>
      <h1 css={styles.getStarted}>{locale === 'en' ? 'Get Started' : 'Rejoignez-nous'}</h1>
      <div css={styles.cardsContainer(isMobile)}>
        <CardTemplate
          title={locale === 'en' ? 'Already Running an Experiment?' : 'Déjà en cours d\'expérimentation ?'}
          subtitle={locale === 'en' ? 'Tell us about it' : 'parlez-nous de'}
          onClick={() => handleCardClick('/ticket-intake/1', 'running')}
          isMobile={isMobile}
        />
        <CardTemplate
          title={locale === 'en' ? 'Ready to Begin an Experiment?' : 'Prêt à commencer une expérience ?'}
          subtitle={locale === 'en' ? 'Begin the journey' : 'Commencer le voyage'}
          onClick={() => handleCardClick('/ticket-intake/0', 'beginning')}
          isMobile={isMobile}
        />
      </div>
    </section>
  );
};

export default ActionSection;
