import {
  createTheme as MUICreateTheme,
  ThemeOptions as MUIThemeOptions,
  Theme,
} from '@mui/system';

interface ButtonProps {
  backgroundColor?: string;
  backgroundColorHover?: string;
  backgroundColorActive?: string;
  backgroundColorDisabled?: string;
  textColor?: string;
  sizeSmall?: string;
  sizeMedium?: string;
  borderRadius?: string;
}

interface CustomThemeOptions extends MUIThemeOptions {
  components?: {
    Button?: Partial<ButtonProps>;
  };
}

export function createTheme(options: CustomThemeOptions = {}): Theme {
  // Merge the button component options with defaults
  const mergedOptions = {
    ...options,
    components: {
      Button: {
        backgroundColor: '#1ED760',
        textColor: '#000',
        sizeSmall: '32px',
        sizeMedium: '48px',
        borderRadius: '9999px',
        ...options.components?.Button,
      },
    },
  };

  return MUICreateTheme(mergedOptions);
}
