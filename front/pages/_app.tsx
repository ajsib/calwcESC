// pages/_app.tsx
import { TeamMemberProvider } from '../contexts/TeamMemberContext';

import '../styles/globals.css';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <TeamMemberProvider>
      <Component {...pageProps} />
    </TeamMemberProvider>
  );
}

export default App;