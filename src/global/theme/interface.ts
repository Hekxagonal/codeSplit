type themeObj = {
  light: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    box: string;
  };
  dark: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    box: string;
  };
};

export type StyledComponentProps = {
  theme: themeObj;
  themeValue: keyof themeObj;
};
