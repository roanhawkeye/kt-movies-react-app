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
import { GenreOption, SortByOption } from './typings';

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

  const handleGenresOnClick = (event: React.MouseEvent<HTMLUListElement>) => {
    let target = event.target as HTMLUListElement;
    dispatch(setGenre(target.title));
    history.push({
      search: `?genre=${target.title}`,
    });
  };


  const preparedSortByOptions = sortByOptions.map( (option, index): SortByOption  => {
    return {
        'id' : `option_${index}`,
        'name': option,
        'diplayName': option.toUpperCase().replace('_', ' '),
      };
  });
  
  preparedSortByOptions.unshift({ id: 'default', name: '', diplayName: 'SELECT SORT BY' } as SortByOption);

  const preparedGenreOptions =  genresOptions.map((genre, index): GenreOption => {
    return {
      id: `genre_${index}`,
      title: genre,
      displayName: genre.toUpperCase(),
    };
  });


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
          <Navigation onClick={handleGenresOnClick}>
            {preparedGenreOptions.map((option) => {
              return <NavigationOption 
                key={option.id} title={option.title} 
                selected={selectedGenre}>
                {option.displayName}
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
            {preparedSortByOptions.map((option) => {
              return <OptionBox 
                key={option.id}
                value={option.name}
              >{option.diplayName}</OptionBox>;
            })}
          </SelectBox>
        </Box>
      </SubHeader>
    </>
  );
};

export default Header;
