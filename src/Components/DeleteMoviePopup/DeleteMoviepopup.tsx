import React, {
  FC,
  FormEvent,
  useCallback,
  useState,
} from 'react';
import { AddMovieHeader, SuccessMessage, SuccessMessageTitle } from '../AddMoviesPopup/AddMoviesPopup.styled';
import { SubmitButton } from '../Form/MovieForm.styled';
import { Modal } from '../Modal/Modal';
import { DeleteContent } from './DeleteMoviePopup.styled';

interface DeleteMoviesPopupProps {
  show: boolean;
  setShow: (value: boolean) => void;
}

export const DeleteMoviePopup: FC<DeleteMoviesPopupProps> = ({ show, setShow }) => {
  const [successModal, setSuccessModal] = useState(false);

  const closeModal = useCallback(()=> {
    setShow(false);
  }, [show]);

  const handleConfirm = (event: FormEvent) => {
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
        <AddMovieHeader>DELETE MOVIE</AddMovieHeader>
        <DeleteContent>Are you sure you want to delete this moview?
          <SubmitButton onClick={handleConfirm} >Confirm</SubmitButton>
        </DeleteContent>
        
      </Modal>
      <Modal show={successModal} onClose={closeSuccessModal}>
        <SuccessMessageTitle>Congratulations!</SuccessMessageTitle>
        <SuccessMessage>The movie has been deleted successfully</SuccessMessage>
      </Modal>
    </>
  );
};