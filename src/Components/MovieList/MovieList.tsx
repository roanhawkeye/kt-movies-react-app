import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Card from '../Card/Card';

import { MovieListContainer, MovieCounter } from './MovieList.styled';

interface Movie {
  title: string;
  poster_path: string;
}

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const renderedMovies = movies.map((movie: Movie) => (
    <Card key={movie.title} name={movie.title} year="2004" categories="Action" imageURL={movie.poster_path} />
  ));

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios.get('http://localhost:4000/movies');

      setMovies(data.data);
    };

    getMovies();
  }, []);

  return (
    <>
      <MovieCounter> {movies.length} movies Found</MovieCounter>
      <MovieListContainer>{renderedMovies}</MovieListContainer>
    </>
  );
};

export default MovieList;
