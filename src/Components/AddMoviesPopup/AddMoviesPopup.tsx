import React, {
  FC,
  FormEvent,
  useCallback,
  useState,
} from 'react';
import { AddMovieHeader, SuccessMessage, SuccessMessageTitle } from './AddMoviesPopup.styled';
import { TopRightButton } from '../Header/Header.styled';
import { Modal } from '../Modal/Modal';
import { MovieForm } from '../Form/MovieForm';

export const AddMoviesPopup: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const closeModal = useCallback(()=> {
    setModalOpen(false);
  }, [modalOpen]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setModalOpen(false);
    setSuccessModal(true);
  };

  const closeSuccessModal = useCallback(()=> {
    setSuccessModal(false);
  }, [successModal]);

  return (
    <>
      <TopRightButton right="6" top="6" onClick={() => setModalOpen(true)}>
        + add movie
      </TopRightButton>
      <Modal show={modalOpen} onClose={closeModal}>
        <AddMovieHeader>ADD MOVIE</AddMovieHeader>
        <MovieForm onSubmit={handleSubmit}/>
      </Modal>
      <Modal show={successModal} onClose={closeSuccessModal}>
        <SuccessMessageTitle>Congratulations!</SuccessMessageTitle>
        <SuccessMessage>The movie has been added to database successfully</SuccessMessage>
      </Modal>
    </>
  );
};
