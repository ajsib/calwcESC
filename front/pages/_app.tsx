// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/globalContexts/authContext';
import { UserProfileProvider } from '@/globalContexts/userContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <UserProfileProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </UserProfileProvider>
  );
}

export default App;