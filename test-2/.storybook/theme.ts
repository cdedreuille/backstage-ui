import { createTheme, defaultTheme } from './create-theme';

export const lightTheme = createTheme(defaultTheme);

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: '#1ED760',
    background: '#000',
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
});
