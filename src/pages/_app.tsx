import { Provider } from 'next-auth/client';
import { AppProps } from 'next/app';
import '../styles/main.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App