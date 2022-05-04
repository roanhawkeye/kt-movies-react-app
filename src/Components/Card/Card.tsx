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

Enzyme.configure({ adapter: new EnzymeAdapter() });

interface MovieData {
  imageURL: string;
  name: string;
  year: string;
  categories: string;
}

const Card: FC<MovieData> = (props: MovieData) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <CardContainer onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
      <HamburgerMenu show={isHovering} />
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
