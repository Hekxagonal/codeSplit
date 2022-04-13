import { ThemeProvider } from 'styled-components';
import { ThemeContextProvider } from '../../contexts/theme';
import GlobalStyles from '../styles/';
import theme from '../../global/theme';
import { render } from '@testing-library/react';

const renderTheme = (Element: JSX.Element) => {
  return render(
    <ThemeProvider theme={theme}>
      <ThemeContextProvider>
        <GlobalStyles />
        {Element}
      </ThemeContextProvider>
    </ThemeProvider>,
  );
};

export default renderTheme;
