export interface Colors {
  primary: string;
  secondary: string;
  tertiary: string;
  black: string;
  white: string;
}

export type MeasureUnit = 'px' | 'em' | 'rem' | '%' | 'cm' | 'mm' | 'in' | 'pt' | 'pc' | 'vh' | 'vw' | 'vmin' | 'vmax';

export type Measure<T extends MeasureUnit> = `${number}${T}` | 'none' | 'auto';

export interface Space<T extends MeasureUnit> {
  none: Measure<T>;
  s: Measure<T>;
  m: Measure<T>;
  l: Measure<T>;
  xl: Measure<T>;
}

export interface Rounded<T extends MeasureUnit> {
  none: Measure<T>;
  s: Measure<T>;
  m: Measure<T>;
  l: Measure<T>;
  circle: '100%';
}

export type Font = string;

type Shadow<
  T extends MeasureUnit
> = `${number}${T} ${number}${T} ${number}${T} ${number}${T} rgba(${number},${number},${number},${number});`;

export interface Shadowed<T extends MeasureUnit> {
  none: 'none';
  soft: Shadow<T>;
  medium: Shadow<T>;
  hard: Shadow<T>;
}
