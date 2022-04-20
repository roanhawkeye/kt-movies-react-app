import { ComponentType } from 'react';
import { StyledComponent } from 'styled-components';
import { Theme } from 'styled-system';

import { InjectedBoxProps } from './mixin/box/box';

export type SC<TProps extends object = InjectedBoxProps> = StyledComponent<ComponentType<{ ref?: any }>, Theme, TProps>;
