import React, { 
  FC, 
  forwardRef, 
  ReactNode, 
  Ref, 
} from 'react';

import { 
  ModalOverlay, 
  ModalPopup, 
  ModalContent, 
  ModalBody,
} from './Modal.styled';

import ReactDOM from 'react-dom';

import { InjectedBoxProps } from '../../theme/mixin/box/box';
import { useAnimationOnMountUnmount } from '../../hooks';
import { CloseButton } from '../Button';

export interface ModalProps extends InjectedBoxProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
  ref?: Ref<HTMLElement>;
}

export const Modal: FC<ModalProps> = forwardRef(({ show, children, onClose, ...boxProps }, ref) => {
  const { shouldRender, onAnimationEnd } = useAnimationOnMountUnmount(show);

  if (!shouldRender) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <ModalOverlay  show={show} onClick={onClose} onAnimationEnd={onAnimationEnd} />
      <ModalPopup  show={show}>
        <ModalContent >
          <CloseButton  onClick={onClose} fixed />
          <ModalBody  {...boxProps} ref={ref}>
            {children}
          </ModalBody>
        </ModalContent>
      </ModalPopup>
    </>,
    document.body,
  );
});
