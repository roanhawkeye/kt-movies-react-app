import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Dispatch } from 'StoreTypes';
import { selectGenre } from '../../store/genre';
import { MovieDetailStatus, selectStatus } from '../../store/movie/details';
import { selectSearchTerm, setSearchTerm } from '../../store/search';
import { selectSortedTerm } from '../../store/sort';
import { AddMoviesPopup } from '../AddMoviesPopup/AddMoviesPopup';
import { Box } from '../Box/Box';
import { CustomButton } from '../Button/Button.styled';
import MovieDetail from '../MovieDetail/MovieDetail';

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
  const dispatch: Dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const movieDetailStatus = useSelector(selectStatus);
  const searchTerm = useSelector(selectSearchTerm);
  const selectedGenre = useSelector(selectGenre);
  const selectedSortedTerm = useSelector(selectSortedTerm);
  

  const handleSearchOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm({ term: event.target.value }));
  };



  return (
    <>
      { movieDetailStatus === MovieDetailStatus.NonVisible && 
        <HeaderContainer imageBackgroundUrl="/public/images/header_background_1.jpeg">
          <TopLeftTitle>netflixroulette</TopLeftTitle>
          <TopRightButton right="6" top="6" onClick={() => setIsOpen(true)}>
          + add movie
          </TopRightButton>
          <AddMoviesPopup show={isOpen} setShow={setIsOpen}/>
          <Title>find your movie</Title>
          <SearchInput value={searchTerm} onChange={handleSearchOnChange}/>
          <CustomButton left="65" width="12" color="#f65261" top="225">
            SEARCH
          </CustomButton>
        </HeaderContainer> }
      { movieDetailStatus === MovieDetailStatus.Visible && 
      <HeaderContainer>
        <MovieDetail />
      </HeaderContainer> } 
      <SubHeader>
        <Box>
          <Navigation>
            <NavigationOption title='all' selected={selectedGenre} >ALL</NavigationOption>
            <NavigationOption title='documentary' selected={selectedGenre}>DOCMENTARY</NavigationOption>
            <NavigationOption title='comedy' selected={selectedGenre}>COMEDY</NavigationOption>
            <NavigationOption title='horror' selected={selectedGenre}>HORROR</NavigationOption>
            <NavigationOption title='crime' selected={selectedGenre}>CRIME</NavigationOption>
          </Navigation>
        </Box>
        <Box>
          <DropdownLabel htmlFor="sorting">SORT BY </DropdownLabel>
          <SelectBox name="sorting" value={selectedSortedTerm}>
            <OptionBox value="">SELECT SORT BY</OptionBox>
            <OptionBox value="release_date">RELEASE DATE</OptionBox>
            <OptionBox value="name">NAME</OptionBox>
          </SelectBox>
        </Box>
      </SubHeader>
    </>
  );
};

export default Header;
