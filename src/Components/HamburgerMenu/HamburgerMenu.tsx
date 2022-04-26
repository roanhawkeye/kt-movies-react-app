import React, { FC, useEffect, useState } from 'react';
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

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setShowMenu(!showMenu);
    e.stopPropagation();
  };

  useEffect(()=>{
    if (!show) {
      setShowMenu(false);
    }
  }, [show]);

  return (
    <>
      <HamburgerMenuStyled show={show} onClick={(e) => handleClick(e)}>
        <HamburgerIcon>...</HamburgerIcon>
        <HamburgerMenuDetails show={showMenu} isParentShow={show}>
          <MenuList>
            <MenuOption>Edit</MenuOption>
            <MenuOption>Delete</MenuOption>
          </MenuList>
        </HamburgerMenuDetails>  
      </HamburgerMenuStyled>

    </>
  );
};