import { HTMLAttributes } from 'react';
import { css } from 'styled-components';
import {
  compose,
  system,
  space,
  color,
  typography,
  flexbox,
  borders,
  background,
  position,
  grid,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  SpaceProps,
  TypographyProps,
  BordersProps,
  PositionProps,
  BackgroundProps,
  GridProps,
} from 'styled-system';

export type SystemProps = ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  TypographyProps &
  BordersProps &
  BackgroundProps &
  PositionProps &
  GridProps;

export type InjectedBoxProps<T extends object = HTMLAttributes<any>> = SystemProps & T;

const layout = system({
  width: true,
  height: true,
  minWidth: true,
  minHeight: true,
  maxWidth: true,
  maxHeight: true,
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true,
  boxSizing: true,
  opacity: true,
  transform: true,
});

const text = system({
  textDecoration: true,
  textTransform: true,
  wordBreak: true,
  textOverflow: true,
  whiteSpace: true,
});

export const boxReset = () => css`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
`;

export const boxSystem = compose(space, color, layout, typography, flexbox, borders, background, position, grid, text);
