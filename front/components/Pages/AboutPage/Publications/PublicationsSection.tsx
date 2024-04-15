/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CardTemplate from './CardTemplate';
import GridContainer from '@/components/Shared/Grid';
import { useRouter } from 'next/router'; // Added router

const titleStyle = css`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 3rem;
  margin-top: 1rem;
  margin-left: var(--margin);
`;

const parentStyle = css`
  padding-bottom: 4rem;
`;

export default function Cards() {
  const router = useRouter(); // Initialized router
  const { locale } = router; // Get current locale from router

  // Define translated titles and subtitles based on locale
  const Title1 = locale === 'en' ? (
    <>Experimentation <br /> Handbook</>
  ) : (
    <>Manuel <br /> d'Expérimentation </>
  );

  const Subtitle1 = locale === 'en' ? (
    "Get the process started with our team to run an experiment."
  ) : (
    "Commencez le processus avec notre équipe pour mener une expérience scientifique."
  );

  const Title2 = locale === 'en' ? (
    <>Data <br /> Insights</>
  ) : (
    <>Perspectives de <br /> Données</>
  );

  const Subtitle2 = locale === 'en' ? (
    "Dive into analytics and insights from our latest experiments."
  ) : (
    "Plongez dans les analyses et perspectives de nos dernières expériences."
  );

  const Title3 = locale === 'en' ? (
    <>Controlled <br /> Trials</>
  ) : (
    <>Essais <br /> Contrôlés</>
  );

  const Subtitle3 = locale === 'en' ? (
    "Understanding the methodology behind successful controlled trials."
  ) : (
    "Comprendre la méthodologie derrière les essais contrôlés réussis."
  );

  const Title4 = locale === 'en' ? (
    <>Innovation <br /> Frameworks</>
  ) : (
    <>Cadres <br /> d'Innovation</>
  );

  const Subtitle4 = locale === 'en' ? (
    "Frameworks to foster innovation and creativity in your experiments."
  ) : (
    "Cadres pour favoriser l'innovation et la créativité dans vos expériences."
  );

  return (
    <div css={parentStyle}>
      <h1 css={titleStyle}>Publications</h1>
      <GridContainer margin={5}>
        <CardTemplate
          title={Title1}
          subtitle={Subtitle1}
          backgroundImage='/images/about/pub1.png'
        />
        <CardTemplate
          title={Title2}
          subtitle={Subtitle2}
          backgroundImage='/images/about/pub4.png'
        />
        <CardTemplate
          title={Title3}
          subtitle={Subtitle3}
          backgroundImage='/images/about/pub3.png'
        />
        <CardTemplate
          title={Title4}
          subtitle={Subtitle4}
          backgroundImage='/images/about/pub5.png'
        />
      </GridContainer>
    </div>
  );
}
