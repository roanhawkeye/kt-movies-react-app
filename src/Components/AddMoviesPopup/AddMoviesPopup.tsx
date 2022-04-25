import React, { FC, useCallback, useState } from 'react';
import { AddMovieHeader } from './AddMoviesPopup.styled';
import { TopRightButton } from '../Header/Header.styled';
import { Modal } from '../Modal/Modal';
import { MovieForm } from '../Form/MovieForm';

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
        <AddMovieHeader>ADD MOVIE</AddMovieHeader>
        <MovieForm />
      </Modal>
    </>
  );
};
