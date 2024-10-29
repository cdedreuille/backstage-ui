interface ButtonProps {
  primaryBackgroundColor: string;
  primaryBackgroundColorHover: string;
  primaryBackgroundColorActive: string;
  primaryBorderColor: string;
  primaryBorderColorHover: string;
  primaryBorderColorActive: string;
  primaryTextColor: string;
  primaryBorderRadius: string;
  secondaryBackgroundColor: string;
  secondaryBackgroundColorHover: string;
  secondaryBackgroundColorActive: string;
  secondaryBorderColor: string;
  secondaryBorderColorHover: string;
  secondaryBorderColorActive: string;
  secondaryTextColor: string;
  secondaryBorderRadius: string;
  sizeSmall: string;
  sizeMedium: string;
}

export interface Theme {
  palette: {
    mode: 'light' | 'dark';
    primary: string;
    background: string;
  };
  components: {
    Button: ButtonProps;
  };
}

export const defaultTheme: Theme = {
  palette: {
    mode: 'light',
    primary: '#1ED760',
    background: '#fff',
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
};

export function createTheme(options: Partial<Theme> = {}): Theme {
  const mergedTheme: Theme = {
    ...defaultTheme,
    ...options,
    palette: {
      ...defaultTheme.palette,
      ...options.palette,
    },
    components: {
      Button: {
        ...defaultTheme.components.Button,
        ...options.components?.Button,
      },
    },
  };

  return mergedTheme;
}
