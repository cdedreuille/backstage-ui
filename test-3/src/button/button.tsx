import { Button as BaseButton, buttonClasses } from '@mui/base/Button';
import styled from '@emotion/styled';

interface ButtonProps {
  size?: 'small' | 'medium';
  variant?: 'primary' | 'secondary';
}

export const Button = styled(BaseButton)<ButtonProps>(
  ({ size = 'medium', disabled, variant = 'primary' }) => `
    user-select: none;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    background-color: ${
      variant === 'primary'
        ? 'var(--button-primary-background-color)'
        : 'transparent'
    };
    padding: 0;
    padding-left: ${size === 'small' ? '16px' : '32px'};
    padding-right: ${size === 'small' ? '16px' : '32px'};
    height: ${
      size === 'small'
        ? 'var(--button-size-small)'
        : 'var(--button-size-medium)'
    };
    border-radius: ${
      variant === 'primary'
        ? 'var(--button-primary-border-radius)'
        : 'var(--button-secondary-border-radius)'
    };
    color: ${
      variant === 'primary'
        ? 'var(--button-primary-text-color)'
        : 'var(--button-secondary-text-color)'
    };
    transition: all 150ms ease;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    border: 1px solid ${
      variant === 'primary'
        ? 'var(--button-primary-border-color)'
        : 'var(--button-secondary-border-color)'
    };
    opacity: ${disabled ? 0.3 : 1};

    &:hover {
      background-color: ${
        disabled
          ? variant === 'primary'
            ? 'var(--button-primary-background-color)'
            : 'var(--button-secondary-background-color)'
          : variant === 'primary'
          ? 'var(--button-primary-background-color-hover)'
          : 'var(--button-secondary-background-color-hover)'
      };
      border-color: ${
        disabled
          ? variant === 'primary'
            ? 'var(--button-primary-border-color)'
            : 'var(--button-secondary-border-color)'
          : variant === 'primary'
          ? 'var(--button-primary-border-color-hover)'
          : 'var(--button-secondary-border-color-hover)'
      };
    }

    &.${buttonClasses.active} {
      background-color: ${
        variant === 'primary'
          ? 'var(--button-primary-background-color-active)'
          : 'var(--button-secondary-background-color-active)'
      };
      box-shadow: none;
    }
  `
);

export default Button;
