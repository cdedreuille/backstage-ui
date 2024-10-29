import { createTheme } from './create-theme';

export const defaultLightTheme = {
  palette: {
    mode: 'light',
    primary: '#1ED760',
    background: {
      default: '#fff',
    },
  },
  components: {
    Button: {
      primaryBackgroundColor: '#1ED760',
      primaryBackgroundColorHover: '#3BE477',
      primaryBackgroundColorActive: '#1ABC54',
      primaryBorderColor: '#1ED760',
      primaryBorderColorHover: '#3BE477',
      primaryBorderColorActive: '#1ABC54',
      primaryTextColor: '#000',
      primaryBorderRadius: '9999px',
      secondaryBackgroundColor: 'transparent',
      secondaryBackgroundColorHover: 'transparent',
      secondaryBackgroundColorActive: 'rgba(0, 0, 0, 0.03)',
      secondaryBorderColor: '#000',
      secondaryBorderColorHover: '#000',
      secondaryBorderColorActive: '#000',
      secondaryTextColor: '#000',
      secondaryBorderRadius: '9999px',
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
};

export const lightTheme = createTheme(defaultLightTheme);

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
      primaryBackgroundColor: '#1ED760',
      primaryBackgroundColorHover: '#3BE477',
      primaryBackgroundColorActive: '#1ABC54',
      primaryBorderColor: '#1ED760',
      primaryBorderColorHover: '#3BE477',
      primaryBorderColorActive: '#1ABC54',
      primaryTextColor: '#000',
      primaryBorderRadius: '9999px',
      secondaryBackgroundColor: 'transparent',
      secondaryBackgroundColorHover: 'transparent',
      secondaryBackgroundColorActive: 'rgba(255, 255, 255, 0.1)',
      secondaryBorderColor: '#fff',
      secondaryBorderColorHover: '#fff',
      secondaryBorderColorActive: '#fff',
      secondaryTextColor: '#fff',
      secondaryBorderRadius: '9999px',
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
