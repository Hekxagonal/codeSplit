import { ThemeProvider } from 'styled-components';
import theme from '../src/global/theme';
import { ThemeContextProvider } from '../src/contexts/theme';
import GlobalStyles from '../src/global/styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <ThemeContextProvider>
        <GlobalStyles />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <Story />
      </ThemeContextProvider>
    </ThemeProvider>
  ),
];
