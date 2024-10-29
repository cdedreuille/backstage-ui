import { ThemeOptions as MUIThemeOptions, Theme } from '@mui/system';
import { createTheme } from './create-theme';

export const lightTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: '#1ED760',
    background: {
      default: '#fff',
    },
  },
  components: {
    Button: {
      backgroundColor: '#1ED760',
      backgroundColorHover: '#3BE477',
      backgroundColorActive: '#1ABC54',
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

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: '#1ED760',
    background: {
      default: '#000',
    },
  },
  components: {
    Button: {
      backgroundColor: '#1ED760',
      backgroundColorHover: '#3BE477',
      backgroundColorActive: '#1ABC54',
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
