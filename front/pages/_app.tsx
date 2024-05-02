// pages/_app.tsx
import { TeamMemberProvider } from '../contexts/TeamMemberContext';
import { ArticleProvider } from '@/contexts/ArticleContext';

import '../styles/globals.css';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <ArticleProvider>
    <TeamMemberProvider>
      <Component {...pageProps} />
    </TeamMemberProvider>
    </ArticleProvider>
  );
}

export default App;