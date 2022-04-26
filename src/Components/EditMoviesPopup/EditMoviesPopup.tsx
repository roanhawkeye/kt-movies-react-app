import React, {
  FC,
  FormEvent,
  useCallback,
  useState,
} from 'react';
import { AddMovieHeader, SuccessMessage, SuccessMessageTitle } from '../AddMoviesPopup/AddMoviesPopup.styled';
import { MovieForm } from '../Form/MovieForm';
import { Modal } from '../Modal/Modal';

interface EditMoviesPopupProps {
  show: boolean;
  setShow: (value: boolean) => void;
}

export const EditMoviesPopup: FC<EditMoviesPopupProps> = ({ show, setShow }) => {
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
        <AddMovieHeader>EDIT MOVIE</AddMovieHeader>
        <MovieForm onSubmit={handleSubmit}/>
      </Modal>
      <Modal show={successModal} onClose={closeSuccessModal}>
        <SuccessMessageTitle>Congratulations!</SuccessMessageTitle>
        <SuccessMessage>The movie has been edited successfully</SuccessMessage>
      </Modal>
    </>
  ); 
};