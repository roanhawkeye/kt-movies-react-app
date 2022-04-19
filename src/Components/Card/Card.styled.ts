import styled from 'styled-components';

export const CardContainer = styled.div`
  font-family: Montserrat;

  height: 300px;
  width: 220px;
  background-color: #232323;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  padding-bottom: 7px;
`;

export const ImageContainer = styled.div`
  height: 70%;
`;

export const Poster = styled.img`
  height: 250px;
  width: 220px;
`;

export const MovieDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  margin-top: 40px;
`;

export const MovieName = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.7;
`;

export const MovieYear = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.7;

  border: 1px solid #979797;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 3px;
`;

export const MovieCategories = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  /* identical to box height */

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.5;
  padding: 5px;
`;
