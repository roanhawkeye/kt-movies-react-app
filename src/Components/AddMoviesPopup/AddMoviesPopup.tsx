import React, {
  FC,
  FormEvent,
  useCallback,
  useState,
} from 'react';
import { AddMovieHeader, SuccessMessage, SuccessMessageTitle } from './AddMoviesPopup.styled';
import { Modal } from '../Modal/Modal';
import { MovieForm } from '../Form/MovieForm';

interface AddMoviewPopupProps {
  show: boolean;
  setShow: (value: boolean) => void;
}

export const AddMoviesPopup: FC<AddMoviewPopupProps> = ({ show, setShow }) => {
  const [successModal, setSuccessModal] = useState(false);

  const closeModal = useCallback(()=> {
    setShow(false);
  }, [show]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setShow(false);
    setSuccessModal(true);
  };

  const closeSuccessModal = useCallback(()=> {
    setSuccessModal(false);
  }, [successModal]);

  return (
    <>
      <Modal show={show} onClose={closeModal}>
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
