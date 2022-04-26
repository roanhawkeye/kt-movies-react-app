import React, { useState } from 'react';
import { AddMoviesPopup } from '../AddMoviesPopup/AddMoviesPopup';
import { Box } from '../Box/Box';
import { CustomButton } from '../Button/Button.styled';

import {
  HeaderContainer,
  Title,
  TopLeftTitle,
  SearchInput,
  SubHeader,
  NavigationOption,
  Navigation,
  DropdownLabel,
  SelectBox,
  OptionBox,
  TopRightButton,
} from './Header.styled';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderContainer imageBackgroundUrl="/public/images/header_background_1.jpeg">
        <TopLeftTitle>netflixroulette</TopLeftTitle>
        <TopRightButton right="6" top="6" onClick={() => setIsOpen(true)}>
        + add movie
        </TopRightButton>
        <AddMoviesPopup show={isOpen} setShow={setIsOpen}/>
        <Title>find your movie</Title>
        <SearchInput />
        <CustomButton left="65" width="12" color="#f65261" top="225">
          SEARCH
        </CustomButton>
      </HeaderContainer>
      <SubHeader>
        <Box>
          <Navigation>
            <NavigationOption>ALL</NavigationOption>
            <NavigationOption>DOCMENTARY</NavigationOption>
            <NavigationOption>COMEDY</NavigationOption>
            <NavigationOption>HORROR</NavigationOption>
            <NavigationOption>CRIME</NavigationOption>
          </Navigation>
        </Box>
        <Box>
          <DropdownLabel htmlFor="sorting">SORT BY </DropdownLabel>
          <SelectBox name="sorting">
            <OptionBox value="release">RELEASE DATE</OptionBox>
            <OptionBox value="saab">Saab</OptionBox>
            <OptionBox value="mercedes">Mercedes</OptionBox>
            <OptionBox value="audi">Audi</OptionBox>
          </SelectBox>
        </Box>
      </SubHeader>
    </>
  );
};

export default Header;
