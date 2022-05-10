import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Dispatch } from 'StoreTypes';
import { MovieDetailStatus, selectMovie, setStatus } from '../../store/movie/details';
import { ImageContainer, Poster } from '../Card/Card.styled';
import { TopLeftTitle } from '../Header/Header.styled';
import { DetailsContainer, DetailsLeftSection, DetailsRightSection } from './MovieDetail.styled';

const MovieDetail: FC = () => {
  const movieDetails = useSelector(selectMovie);
  const dispatch: Dispatch = useDispatch();

  const closeDetails = () => {
        console.log('closing details!!');
        dispatch(setStatus(MovieDetailStatus.NonVisible));
  };

  return (
    <>
      <TopLeftTitle onClick={() => closeDetails()}>netflixroulette</TopLeftTitle>
      <DetailsContainer>
        <DetailsLeftSection>
          <ImageContainer>
            <Poster src={movieDetails.poster_path} />
          </ImageContainer></DetailsLeftSection>
        <DetailsRightSection>Details</DetailsRightSection>
      </DetailsContainer>
    </>
  );
};

export default MovieDetail;