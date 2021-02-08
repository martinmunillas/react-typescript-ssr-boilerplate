import { Colors, Font, Rounded, Shadowed, Space } from './types';

export const colors: Colors = {
  primary: '#234555',
  secondary: '#948571',
  tertiary: '#734582',
  black: '#111111',
  white: '#eeeeee',
};

export const space: Space<'px'> = {
  none: '0px',
  s: '10px',
  m: '20px',
  l: '40px',
  xl: '50px',
};

export const rounded: Rounded<'px'> = {
  none: '0px',
  s: '10px',
  m: '20px',
  l: '50px',
  circle: '100%',
};

export const font: Font = 'Open-Sans, Helvetica, Sans-Serif';

export const shadow: Shadowed<'px'> = {
  none: 'none',
  soft: '3px 0px 25px 0px rgba(14,14,14,0.32);',
  medium: '5px 0px 32px 1px rgba(14, 14, 14, 0.32);',
  hard: '21px 0px 49px 4px rgba(14,14,14,0.31);',
};
