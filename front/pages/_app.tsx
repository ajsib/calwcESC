// pages/_app.tsx
import { TeamMemberProvider } from '@/components/modules/People/TeamMemberContext';
import { ArticleProvider } from '@/components/modules/News/ArticleContext';

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