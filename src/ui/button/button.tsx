import { Button as BaseButton, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';

interface ButtonProps {
  size?: 'small' | 'medium';
}

export const Button = styled(BaseButton)<ButtonProps>(
  ({ theme, size = 'medium', disabled }) => `
    user-select: none;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    background-color: ${theme.components?.Button?.backgroundColor};
    padding: 0;
    padding-left: ${size === 'small' ? '16px' : '32px'};
    padding-right: ${size === 'small' ? '16px' : '32px'};
    height: ${
      size === 'small'
        ? theme.components?.Button?.sizeSmall
        : theme.components?.Button?.sizeMedium
    };
    border-radius: ${theme.components?.Button?.borderRadius};
    color: ${theme.components?.Button?.textColor};
    transition: all 150ms ease;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    border: 1px solid ${theme.components?.Button?.backgroundColor};
    opacity: ${disabled ? 0.3 : 1};

    &:hover {
      background-color: ${
        disabled
          ? theme.components?.Button?.backgroundColor
          : theme.components?.Button?.backgroundColorHover
      };
    }

    &.${buttonClasses.active} {
      background-color: ${theme.components?.Button?.backgroundColorActive};
      box-shadow: none;
    }
  `
);

export default Button;
