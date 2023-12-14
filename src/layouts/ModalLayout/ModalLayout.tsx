import React, {FC, ReactNode} from 'react';
import {createPortal} from 'react-dom';
import {ModalOverlay} from './styled';

type Props = {
  onOverlayClick: () => void
  children?: ReactNode
}

const ModalLayout: FC<Props> = ({ onOverlayClick, children }) => {
  return createPortal(
    <ModalOverlay onClick={onOverlayClick}>
      {children}
    </ModalOverlay>,
    document.body)
};

export default ModalLayout;