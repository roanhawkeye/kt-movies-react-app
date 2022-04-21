import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

import { InjectedBoxProps, boxSystem } from '../../theme/mixin';

import { SC } from '../../theme/styled-component';

export const buttonReset = () => css`
  appearance: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  background: none;
`;

export const fixed = ifProp(
  { fixed: true },
  css`
    position: absolute;
    top: 10px;
    right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    z-index: 1;
  `,
);

export interface CloseButtonProps extends InjectedBoxProps<ButtonHTMLAttributes<any>> {
  fixed?: boolean;
}

export const CloseButton: SC<CloseButtonProps> = styled.button<CloseButtonProps>`
  ${buttonReset()}

  padding-right: 25px;
  padding-left: 10px;
  color: grey;
  font-size: 10px;
  background: transparent url('/public/images/Close.svg') no-repeat right 10px center;
  background-size: 11px 11px;
  text-transform: uppercase;

  ${fixed}
  ${boxSystem}
`;

CloseButton.defaultProps = {
  type: 'button',
  children: 'Close',
};
