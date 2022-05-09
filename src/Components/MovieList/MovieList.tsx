/* eslint-disable */
import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'StoreTypes';
import { Movie } from '../../domain';
import { getMovies, movieListReceived, selectMovies } from '../../store/movie/list';

import Card from '../Card/Card';

import { MovieListContainer, MovieCounter } from './MovieList.styled';


const MovieList: FC = () => {
  const dispatch: Dispatch = useDispatch();
  const movieList = useSelector(selectMovies);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <>
      <MovieCounter> {movieList.length} movies Found</MovieCounter>
      <MovieListContainer>{ movieList.map((movie: Movie) => (
        <Card key={movie.title} name={movie.title} year="2004" categories="Action" imageURL={movie.poster_path} />
      ))}</MovieListContainer>
    </>
  );
};

export default MovieList;
