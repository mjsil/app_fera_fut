import 'styled-components';

import { Theme } from '../../global/styles';

declare module 'styled-components' {
  type ThemeType = typeof Theme;

  export interface DefaultTheme extends ThemeType {}
}
