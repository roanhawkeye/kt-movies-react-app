/* eslint-disable */
import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../actions';
import { StateProps } from '../../reducers';
import { Movie } from '../../domain';

import Card from '../Card/Card';

import { MovieListContainer, MovieCounter } from './MovieList.styled';

interface MovieListProps {
  getMovies: () => void;
  movies: [];
}

const MovieList: FC<MovieListProps> = ({ getMovies, movies }) => {

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <MovieCounter> {movies.length} movies Found</MovieCounter>
      <MovieListContainer>{ movies.map((movie: Movie) => (
        <Card key={movie.title} name={movie.title} year="2004" categories="Action" imageURL={movie.poster_path} />
      ))}</MovieListContainer>
    </>
  );
};

const mapStateToProps = (state: StateProps) => {
  return { movies: state.movies };
};

export default connect(mapStateToProps, { getMovies })(MovieList);
