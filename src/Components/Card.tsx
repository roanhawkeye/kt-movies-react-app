import React, { FC } from 'react';

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

Enzyme.configure({ adapter: new EnzymeAdapter() });

interface MovieData {
  imageURL: string;
  name: string;
  year: string;
  categories: string;
}

const Card: FC<MovieData> = (props: MovieData) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Poster src={props.imageURL} />
      </ImageContainer>
      <MovieDataContainer>
        <MovieName>{props.name}</MovieName>
        <MovieYear>{props.year}</MovieYear>
      </MovieDataContainer>
      <MovieCategories>{props.categories}</MovieCategories>
    </CardContainer>
  );
};

export default Card;
