import styled from 'styled-components';

import { SC } from '../../theme/styled-component';
import { boxSystem, boxReset, InjectedBoxProps } from '../../theme/mixin/box/box';

export type BoxProps = InjectedBoxProps;

export const Box: SC<BoxProps> = styled.div<BoxProps>`
  ${boxReset()}

  /* place your styles here */
  
  ${boxSystem}
`;
