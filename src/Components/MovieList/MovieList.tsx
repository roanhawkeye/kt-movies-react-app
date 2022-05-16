/* eslint-disable */
import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Dispatch } from 'StoreTypes';

import { Movie } from '../../domain';
import { useQuery } from '../../hooks';
import { selectGenre, setGenre } from '../../store/genre';
import { getMovies, selectMovies, getGenres, getSortByOptions } from '../../store/movie';
import { selectSearchTerm, setSearchTerm } from '../../store/search';
import { selectSortedTerm, setSortBy, SortByOptions } from '../../store/sort';
import Card from '../Card/Card';

import { MovieListContainer, MovieCounter } from './MovieList.styled';
import { MoviePathParam } from './typings';


const MovieList: FC = () => {
  const dispatch: Dispatch = useDispatch();
  const movieList = useSelector(selectMovies);
  const query = useQuery();
  const { searchQuery } = useParams<MoviePathParam>();
  const searchTerm = useSelector(selectSearchTerm);
  const selectedGenre = useSelector(selectGenre);
  const selectedSortBy = useSelector(selectSortedTerm);

  const paramGenre = query.get('genre') || '';
  const paramSortBy = query.get('sortBy') || '';

  useEffect(() => {
    dispatch(getMovies({
      search: searchQuery,
      genre: paramGenre,
      sortBy: paramSortBy
    }));
    dispatch(getGenres());
    dispatch(getSortByOptions());
    dispatch(setSearchTerm({ term: searchQuery}));
    dispatch(setGenre(paramGenre));
    dispatch(setSortBy(paramSortBy));
  }, []);

  useEffect(() => {
    dispatch(getMovies({
      search: searchTerm,
      genre: selectedGenre,
      sortBy: selectedSortBy
    }));
  }, [searchTerm, selectedGenre, selectedSortBy]);

  return (
    <>
      <MovieCounter> {movieList.length} movies Found</MovieCounter>
      <MovieListContainer>{ movieList.map((movie: Movie) => (
        <Card movieId={movie.id} key={movie.id} name={movie.title} year={movie.release_date} categories={movie.genres.join(", ")} imageURL={movie.poster_path} />
      ))}</MovieListContainer>
    </>
  );
};

export default MovieList;
