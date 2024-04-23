/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CardTemplate from './CardTemplate';
import GridContainer from '@/components/Shared/Public/Grid';
import { useRouter } from 'next/router'; 
import { useState, useEffect } from 'react';

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

  // Define translated titles and subtitles based on locale
  const Title1 = locale === 'en' ? (
    <>Experimentation <br /> Handbook</>
  ) : (
    <>Manuel <br /> d&apos;Expérimentation </>
  );

  const Subtitle1 = locale === 'en' ? (
    <>Get the process started with our team to run an experiment.</>
  ) : (
    <>Commencez le processus avec notre équipe pour mener une expérience scientifique.</>
  );

  const Title2 = locale === 'en' ? (
    <>Data <br /> Insights</>
  ) : (
    <>Aperçu de <br /> Données</>
  );

  const Subtitle2 = locale === 'en' ? (
    <>Dive into analytics and insights from our latest experiments.</>
  ) : (
    <>Plongez dans les analyses et perspectives de nos dernières expériences.</>
  );

  const Title3 = locale === 'en' ? (
    <>Controlled <br /> Trials</>
  ) : (
    <>Essais <br /> Contrôlés</>
  );

  const Subtitle3 = locale === 'en' ? (
    <>Understanding the methodology behind successful controlled trials.</>
  ) : (
    <>Comprendre la méthodologie derrière les essais contrôlés réussis.</>
  );

  const Title4 = locale === 'en' ? (
    <>Innovation <br /> Frameworks</>
  ) : (
    <>Cadres <br /> d&apos;Innovation</>
  );

  const Subtitle4 = locale === 'en' ? (
    <>Frameworks to foster innovation and creativity in your experiments.</>
  ) : (
    <>Cadres pour favoriser l&apos;innovation et la créativité dans vos expériences.</>
  );

  return (
    <div css={parentStyle}>
      <h1 css={titleStyle}>Publications</h1>
      <GridContainer margin={isMobile ? 1 : 5}>
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
