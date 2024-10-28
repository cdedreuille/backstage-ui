import { ThemeOptions as MUIThemeOptions, Theme } from '@mui/system';
import { createTheme } from './create-theme';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: '#1ED760',
  },
  components: {
    Button: {
      backgroundColor: '#1ED760',
      textColor: '#000',
      sizeSmall: '32px',
      sizeMedium: '48px',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
