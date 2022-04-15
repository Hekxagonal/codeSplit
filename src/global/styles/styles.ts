import { createGlobalStyle } from 'styled-components';
import { StyledComponentProps } from '../theme/interface';

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
    }
    body {
      background: ${({ theme, themeValue }: StyledComponentProps) =>
        theme[themeValue].background};
      transition: background 1s ease-in-out;
    }
`;
