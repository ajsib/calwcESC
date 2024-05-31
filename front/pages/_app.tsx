// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/globalContexts/authContext';
import { UserProfileProvider } from '@/globalContexts/userContext';
import { Provider } from 'react-redux';
import store from '@/store/index';
import '@/MockAPI/mockAPI';
function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <UserProfileProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </UserProfileProvider>
    </Provider>
  );
}

export default App;