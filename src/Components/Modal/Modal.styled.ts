import styled from 'styled-components';

import { SC } from '../../theme/styled-component';

import { 
  InjectedBoxProps, 
  boxSystem, 
  fadeInFadeOutAnimation, 
  popupInOutAnimation 
} from '../../theme/mixin';

export const Overlay: SC = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

  ${boxSystem}
`;

export interface ModalOverlayProps {
  show: boolean;
  onClick: () => void;
  onAnimationEnd?: () => void;
}

export const ModalOverlay = styled(Overlay)<ModalOverlayProps>`
  background: rgba(255, 255, 255, 0.9);
  z-index: 10003;

  ${fadeInFadeOutAnimation()};
  ${boxSystem}
`;

export interface ModalPopupProps extends InjectedBoxProps {
  show: boolean;
}

export const ModalPopup = styled.section<ModalPopupProps>`
  width: 100vw;
  max-height: 100%;
  padding: 10px;
  display: flex;
  position: fixed;
  z-index: 10003;
  color: white;

  ${popupInOutAnimation()};
  ${boxSystem}
`;

export const ModalContent: SC = styled.div`
  display: flex;
  width: 100%;
  border: lightblue lightgray;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  background: white;

  ${boxSystem}
`;

export const ModalBody: SC = styled.div`
  overflow-x: auto;
  overflow-y: scroll;
  margin-top: 20px;
  width: 100%;

  ${boxSystem}
`;

export const ModalHeader: SC = styled.header`
  position: absolute;
  top: 45px;
  overflow: hidden;
  background: lightblue;
  border-bottom: lightblue lightgray;

  ${boxSystem}
`;
