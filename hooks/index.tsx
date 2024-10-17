import React, {ReactNode} from 'react';

import {ThemeProvider} from '../theme';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({children}) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default AppProvider;
