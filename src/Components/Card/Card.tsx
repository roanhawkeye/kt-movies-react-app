import React, { FC, useState } from 'react';

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import {
  CardContainer,
  ImageContainer,
  MovieDataContainer,
  MovieName,
  MovieYear,
  MovieCategories,
  Poster,
} from './Card.styled';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'StoreTypes';
import { getMovieDetails, MovieDetailStatus, setStatus } from '../../store/movie/details';

Enzyme.configure({ adapter: new EnzymeAdapter() });

interface MovieData {
  imageURL: string;
  name: string;
  year: string;
  categories: string;
  movieId?: number;
}

const Card: FC<MovieData> = (props: MovieData) => {
  const [isHovering, setIsHovering] = useState(false);
  const dispatch: Dispatch = useDispatch();

  const handleOnClick = (movieId: number) =>{
    dispatch(getMovieDetails(movieId));
    dispatch(setStatus(MovieDetailStatus.Visible));
  };

  return (
    <CardContainer 
      onMouseOver={() => setIsHovering(true)} 
      onMouseOut={() => setIsHovering(false)} 
      onClick={() => handleOnClick(props.movieId || 0)}>
      <HamburgerMenu show={isHovering} />
      <ImageContainer>
        <Poster src={props.imageURL} />
      </ImageContainer>
      <MovieDataContainer>
        <MovieName>{props.name}</MovieName>
        <MovieYear>{props.year.substring(0, 4)}</MovieYear>
      </MovieDataContainer>
      <MovieCategories>{props.categories}</MovieCategories>
    </CardContainer>
  );
};

export default Card;
