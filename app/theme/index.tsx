import React from 'react';

import {DefaultTheme, ThemeProvider as StyledProvider} from 'styled-components';

import defaultTheme from './lightTheme';
import darkTheme from './darkTheme';

interface IThemeContextData {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeContext = React.createContext<IThemeContextData>(
  {} as IThemeContextData,
);

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [theme, setTheme] = React.useState(defaultTheme);

  const toggleTheme = React.useCallback(() => {
    setTheme(theme.title === 'light' ? darkTheme : defaultTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{toggleTheme, theme}}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export {ThemeProvider, ThemeContext};
