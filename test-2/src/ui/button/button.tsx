import { Button as BaseButton, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';

interface ButtonProps {
  size?: 'small' | 'medium';
  variant?: 'primary' | 'secondary';
}

export const Button = styled(BaseButton)<ButtonProps>(
  ({ theme, size = 'medium', disabled, variant = 'primary' }) => `
    user-select: none;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    background-color: ${
      variant === 'primary'
        ? theme.components?.Button?.primaryBackgroundColor
        : 'transparent'
    };
    padding: 0;
    padding-left: ${size === 'small' ? '16px' : '32px'};
    padding-right: ${size === 'small' ? '16px' : '32px'};
    height: ${
      size === 'small'
        ? theme.components?.Button?.sizeSmall
        : theme.components?.Button?.sizeMedium
    };
    border-radius: ${theme.components?.Button?.primaryBorderRadius};
    color: ${
      variant === 'primary'
        ? theme.components?.Button?.primaryTextColor
        : theme.components?.Button?.secondaryTextColor
    };
    transition: all 150ms ease;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    border: 1px solid ${
      variant === 'primary'
        ? theme.components?.Button?.primaryBorderColor
        : theme.components?.Button?.secondaryBorderColor
    };
    opacity: ${disabled ? 0.3 : 1};

    &:hover {
      background-color: ${
        disabled
          ? variant === 'primary'
            ? theme.components?.Button?.primaryBackgroundColor
            : theme.components?.Button?.secondaryBackgroundColor
          : variant === 'primary'
          ? theme.components?.Button?.primaryBackgroundColorHover
          : theme.components?.Button?.secondaryBackgroundColorHover
      };
      border-color: ${
        disabled
          ? variant === 'primary'
            ? theme.components?.Button?.primaryBorderColor
            : theme.components?.Button?.secondaryBorderColor
          : variant === 'primary'
          ? theme.components?.Button?.primaryBorderColorHover
          : theme.components?.Button?.secondaryBorderColorHover
      };
    }

    &.${buttonClasses.active} {
      background-color: ${
        variant === 'primary'
          ? theme.components?.Button?.primaryBackgroundColorActive
          : theme.components?.Button?.secondaryBackgroundColorActive
      };
      box-shadow: none;
    }
  `
);

export default Button;
