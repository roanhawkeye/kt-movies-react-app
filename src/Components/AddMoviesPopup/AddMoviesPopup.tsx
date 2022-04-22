import React, { FC, useCallback, useState } from 'react';
import { Box } from '../Box/Box';
import { TopRightButton } from '../Header/Header.styled';
import { Modal } from '../Modal/Modal';

export const AddMoviesPopup: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = useCallback(()=> {
    setModalOpen(false);
  }, [modalOpen]);

  return (
    <>
      <TopRightButton right="6" top="6" onClick={() => setModalOpen(true)}>
        + add movie
      </TopRightButton>
      <Modal show={modalOpen} onClose={closeModal}>
        <Box>Hello Modal!!!!</Box>
      </Modal>
    </>
  );
};
