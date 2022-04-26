import React, { FC, useCallback, useState } from 'react';
import { DeleteMoviePopup } from '../DeleteMoviePopup/DeleteMoviepopup';
import { EditMoviesPopup } from '../EditMoviesPopup';
import {
  HamburgerMenuStyled,
  HamburgerMenuDetails,
  MenuList,
  MenuOption,
  HamburgerIcon,
} from './HamburgerMenu.styled';

interface HamburgerProps {
  show: boolean;
}

export const HamburgerMenu: FC<HamburgerProps> = ({ show }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setShowMenu(!showMenu);
    e.stopPropagation();
  };

  const handleEditClick = useCallback(()=>{
    setIsEditOpen(true);
  }, [isEditOpen]);

  const handleDeleteClick = useCallback(()=>{
    setIsDeleteOpen(true);
  }, [isDeleteOpen]);

  return (
    <>
      <HamburgerMenuStyled show={show} onClick={(e) => handleClick(e)}>
        <HamburgerIcon>...</HamburgerIcon>
        <HamburgerMenuDetails show={showMenu} isParentShow={show}>
          <MenuList>
            <MenuOption onClick={handleEditClick}>Edit</MenuOption>
            <MenuOption onClick={handleDeleteClick}>Delete</MenuOption>
          </MenuList>
        </HamburgerMenuDetails>  
      </HamburgerMenuStyled>
      <EditMoviesPopup show={isEditOpen} setShow={setIsEditOpen} />
      <DeleteMoviePopup show={isDeleteOpen} setShow={setIsDeleteOpen} />
    </>
  );
};