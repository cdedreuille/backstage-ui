/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type AllowedElements =
  | 'div'
  | 'span'
  | 'section'
  | 'article'
  | 'main'
  | 'aside'
  | 'header'
  | 'footer'
  | 'nav'
  | 'form';

type BoxBaseProps = {
  as?: AllowedElements;
  display?: 'flex' | 'inline-flex' | 'block' | 'inline-block' | 'none';
  direction?: 'row' | 'column';
  p?: number | string;
  px?: number | string;
  py?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
  m?: number | string;
  mx?: number | string;
  my?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  width?: number | string;
  height?: number | string;
  children: React.ReactNode;
};

type BoxProps = BoxBaseProps &
  Omit<React.ComponentPropsWithoutRef<'div'>, keyof BoxBaseProps>;

const createSpacing = (value: number | string) => {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
};

type StyleProps = Omit<
  BoxBaseProps,
  'direction' | 'display' | 'children' | 'as'
>;

const createStyles = (props: StyleProps) => {
  const styleMap = {
    p: (v: string) => `padding: ${v};`,
    px: (v: string) => `padding-left: ${v}; padding-right: ${v};`,
    py: (v: string) => `padding-top: ${v}; padding-bottom: ${v};`,
    pt: (v: string) => `padding-top: ${v};`,
    pr: (v: string) => `padding-right: ${v};`,
    pb: (v: string) => `padding-bottom: ${v};`,
    pl: (v: string) => `padding-left: ${v};`,
    m: (v: string) => `margin: ${v};`,
    mx: (v: string) => `margin-left: ${v}; margin-right: ${v};`,
    my: (v: string) => `margin-top: ${v}; margin-bottom: ${v};`,
    mt: (v: string) => `margin-top: ${v};`,
    mr: (v: string) => `margin-right: ${v};`,
    mb: (v: string) => `margin-bottom: ${v};`,
    ml: (v: string) => `margin-left: ${v};`,
    width: (v: string) => `width: ${v};`,
    height: (v: string) => `height: ${v};`,
  } as const;

  return Object.entries(props)
    .filter(([key]) => key in styleMap)
    .map(([key, value]) => {
      const styleKey = key as keyof typeof styleMap;
      return styleMap[styleKey](createSpacing(value as string | number));
    })
    .join('\n');
};

export const Box = ({
  as = 'div',
  display = 'flex',
  direction = 'row',
  p = 0,
  px = 0,
  py = 0,
  pt = 0,
  pr = 0,
  pb = 0,
  pl = 0,
  m = 0,
  mx = 0,
  my = 0,
  mt = 0,
  mr = 0,
  mb = 0,
  ml = 0,
  width = 'auto',
  height = 'auto',
  children,
  ...props
}: BoxProps) => {
  const Component = as as React.ElementType;

  const styles = css`
    display: ${display};
    ${display.includes('flex') &&
    `
      flex-direction: ${direction};
    `}
    ${createStyles({
      p,
      px,
      py,
      pt,
      pr,
      pb,
      pl,
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,
      width,
      height,
      ...props,
    } as StyleProps)}
  `;

  return (
    <Component css={styles} {...props}>
      {children}
    </Component>
  );
};
