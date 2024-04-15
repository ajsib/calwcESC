/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CardTemplate from './CardTemplate';
import { useRouter } from 'next/router'; // Added router

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
  justify-content: center;
`;

const ActionSection = () => {
  const router = useRouter(); // Initialized router
  const { locale } = router; // Get current locale from router

  // Define translated "Get Started" text based on locale
  const GetStartedText = locale === 'en' ? (
    <h1 css={getStartedStyle}>Get Started</h1>
  ) : (
    <h1 css={getStartedStyle}>Rejoignez-nous</h1>
  );

  // Define translated titles and subtitles for cards based on locale
  const Title1 = locale === 'en' ? (
    <>Already Running <br /> an Experiment?</>
  ) : (
    <>Déjà en cours <br /> d'expérimentation ?</>
  );

  const Subtitle1 = locale === 'en' ? (
    <>View Your <br /> Dashboard</>
  ) : (
    <>Voir votre <br /> tableau de bord</>
  );

  const Title2 = locale === 'en' ? (
    <>Ready to Begin <br /> an Experiment?</>
  ) : (
    <>Prêt à commencer <br /> une expérience ?</>
  );

  const Subtitle2 = locale === 'en' ? (
    <>Submit <br /> a Request</>
  ) : (
    <>Soumettre <br /> une demande</>
  );

  // Handler functions for card clicks
  const handleDashboardClick = () => {
    // Define the appropriate route based on locale
    const route = locale === 'en' ? '/dashboard' : '/tableau-de-bord';
    router.push(route);
  };

  const handleSubmitRequestClick = () => {
    // Define the appropriate route based on locale
    const route = locale === 'en' ? '/submit-request' : '/soumettre-demande';
    router.push(route);
  };

  return (
    <section css={actionSectionStyle}>
      {GetStartedText}
      <div css={cardsContainerStyle}>
        <CardTemplate
          title={Title1}
          subtitle={Subtitle1}
          onClick={handleDashboardClick} // Added click handler
        />
        <CardTemplate
          title={Title2}
          subtitle={Subtitle2}
          onClick={handleSubmitRequestClick} // Added click handler
        />
      </div>
    </section>
  );
};

export default ActionSection;
