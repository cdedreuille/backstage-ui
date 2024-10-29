import {
  createTheme as MUICreateTheme,
  ThemeOptions as MUIThemeOptions,
  Theme,
} from '@mui/system';
import { defaultLightTheme } from './theme';

interface ButtonProps {
  primaryBackgroundColor?: string;
  primaryBackgroundColorHover?: string;
  primaryBackgroundColorActive?: string;
  primaryBorderColor?: string;
  primaryBorderColorHover?: string;
  primaryBorderColorActive?: string;
  primaryTextColor?: string;
  primaryBorderRadius?: string;
  secondaryBackgroundColor?: string;
  secondaryBackgroundColorHover?: string;
  secondaryBackgroundColorActive?: string;
  secondaryBorderColor?: string;
  secondaryBorderColorHover?: string;
  secondaryBorderColorActive?: string;
  secondaryTextColor?: string;
  secondaryBorderRadius?: string;
  sizeSmall?: string;
  sizeMedium?: string;
}

interface CustomThemeOptions extends MUIThemeOptions {
  components?: {
    Button?: Partial<ButtonProps>;
  };
}

export function createTheme(options: CustomThemeOptions = {}): Theme {
  // Merge the button component options with defaults
  const mergedOptions = {
    ...defaultLightTheme,
    ...options,
    components: {
      Button: {
        ...defaultLightTheme.components?.Button,
        ...options.components?.Button,
      },
    },
  };

  return MUICreateTheme(mergedOptions);
}
