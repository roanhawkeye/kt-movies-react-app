import React, { FC } from 'react';
import { Footer } from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import MovieList from '../../Components/MovieList/MovieList';

export const Home: FC = () => {
  return (
    <>
      <Header/>
      <MovieList />
      <Footer>netflixroulette</Footer>
    </>
  );
};