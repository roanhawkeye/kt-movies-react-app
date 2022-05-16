import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Dispatch } from 'StoreTypes';
import { selectGenre, setGenre } from '../../store/genre';
import { selectGenresOptions, selectSortByOptions } from '../../store/movie';
import { MovieDetailStatus, selectStatus } from '../../store/movie/details';
import { selectSearchTerm, setSearchTerm } from '../../store/search';
import { selectSortedTerm, setSortBy } from '../../store/sort';
import { AddMoviesPopup } from '../AddMoviesPopup/AddMoviesPopup';
import { Box } from '../Box/Box';
import { CustomButton } from '../Button/Button.styled';
import MovieDetail from '../MovieDetail/MovieDetail';
import { history } from '../../history';

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
  const genresOptions = useSelector(selectGenresOptions);
  const sortByOptions = useSelector(selectSortByOptions);
  

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
            {genresOptions.map((option) => {
              return <NavigationOption 
                key={option} title={option} 
                selected={selectedGenre} 
                onClick={() => {
                  dispatch(setGenre(option));
                  history.push({
                    search: `?genre=${option}`,
                  });
                }}>
                {option.toUpperCase()}
              </NavigationOption>;
            })}
          </Navigation>
        </Box>
        <Box>
          <DropdownLabel htmlFor="sorting">SORT BY </DropdownLabel>
          <SelectBox name="sorting" value={selectedSortedTerm} onChange={(e) => {
            dispatch(setSortBy(e.target.selectedOptions[0].value)); 
            history.push({
              search: `?sortBy=${e.target.selectedOptions[0].value}`,
            });
          }}>
            <OptionBox value="">SELECT SORT BY</OptionBox>
            {sortByOptions.map((option) => {
              return <OptionBox 
                key={option}
                value={option}
              >{option.toUpperCase().replace('_', ' ')}</OptionBox>;
            })}
          </SelectBox>
        </Box>
      </SubHeader>
    </>
  );
};

export default Header;
