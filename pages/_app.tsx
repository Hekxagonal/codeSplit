import { ThemeProvider } from 'styled-components';
import theme from '../src/global/theme';
import { ThemeContextProvider } from '../src/contexts/theme';
import { AppProps } from 'next/app';
import GlobalStyles from '../src/global/styles';
import { UserContextProvider } from '../src/contexts/user';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ThemeContextProvider>
        <UserContextProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </UserContextProvider>
      </ThemeContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
