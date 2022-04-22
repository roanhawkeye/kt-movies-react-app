import { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export interface FadeInFadeOutAnimationOptions {
  time?: string;
}

export const fadeInFadeOutAnimation = ({ time = '300ms' }: FadeInFadeOutAnimationOptions = {}) => css`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  animation: ${ifProp({ show: true }, 'fadeIn', 'fadeOut')} ${time};
`;
