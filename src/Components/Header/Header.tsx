import React from 'react';
import { CustomButton } from '../Button/Button.styled';

import {
  HeaderContainer,
  Title,
  TopLeftTitle,
  TopRightButton,
  SearchInput,
  SubHeader,
  NavigationOption,
  Navigation,
  DropdownLabel,
} from './Header.styled';

const Header = () => {
  return (
    <React.Fragment>
      <HeaderContainer imageBackgroundUrl="/public/images/header_background_1.jpeg">
        <TopLeftTitle>netflixroulette</TopLeftTitle>
        <TopRightButton right="6" top="6">
          + add movie
        </TopRightButton>
        <Title>find your movie</Title>
        <SearchInput />
        <CustomButton left="65" width="12" color="#f65261" top="225">
          SEARCH
        </CustomButton>
      </HeaderContainer>
      <SubHeader>
        <div>
          <Navigation>
            <NavigationOption>ALL</NavigationOption>
            <NavigationOption>DOCMENTARY</NavigationOption>
            <NavigationOption>COMEDY</NavigationOption>
            <NavigationOption>HORROR</NavigationOption>
            <NavigationOption>CRIME</NavigationOption>
          </Navigation>
        </div>
        <div>
          <DropdownLabel htmlFor="sorting">SORT BY </DropdownLabel>
          <select name="sorting" id="sorting">
            <option value="release">RELEASE DATE</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </SubHeader>
    </React.Fragment>
  );
};

export default Header;
