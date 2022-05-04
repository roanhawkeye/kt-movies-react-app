import { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export interface PopupInOutAnimationOptions {
  time?: string;
}

export const popupInOutAnimation = ({ time = '300ms' }: PopupInOutAnimationOptions = {}) => css`
  @keyframes popupIn {
    0% {
      top: -100%;
    }
    100% {
      top: 0px;
    }
  }

  @keyframes popupOut {
    0% {
      top: 0px;
    }
    100% {
      top: -100%;
    }
  }

  animation: ${ifProp({ show: true }, 'popupIn', 'popupOut')} ${time};
  animation-fill-mode: forwards;
`;
