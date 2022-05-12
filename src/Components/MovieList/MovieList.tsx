/* eslint-disable */
import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Dispatch } from 'StoreTypes';

import { Movie } from '../../domain';
import { useQuery } from '../../hooks';
import { getMovies, selectMovies } from '../../store/movie/list';
import { selectSearchTerm, setSearchTerm } from '../../store/search';
import Card from '../Card/Card';

import { MovieListContainer, MovieCounter } from './MovieList.styled';
import { MoviePathParam } from './typings';


const MovieList: FC = () => {
  const dispatch: Dispatch = useDispatch();
  const movieList = useSelector(selectMovies);
  const query = useQuery();
  const { searchQuery } = useParams<MoviePathParam>();
  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
    dispatch(getMovies({
      search: searchQuery,
      genre: query.get('genre') || ''
    }));
    dispatch(setSearchTerm({ term: searchQuery}));
  }, []);

  useEffect(() => {
    dispatch(getMovies({
      search: searchTerm,
      genre: query.get('genre') || ''
    }));
  }, [searchTerm]);

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
