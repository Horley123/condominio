import lightTheme from '@/theme/lightTheme';
import 'styled-components';

declare module 'styled-components' {
  type ThemeType = typeof lightTheme;

  export interface DefaultTheme extends ThemeType {}
}
