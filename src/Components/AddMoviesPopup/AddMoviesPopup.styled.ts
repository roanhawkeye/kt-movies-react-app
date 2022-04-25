import styled from 'styled-components';

export const AddMovieHeader = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 49px;
  /* identical to box height */

  letter-spacing: 1px;
  text-transform: uppercase;

  margin-left: 10%;
  margin-bottom: 20px;
  color: #FFFFFF; 
`;

export const SuccessMessage = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 49px;
  /* identical to box height */
  text-align: center;

  color: #FFFFFF;
`;

export const SuccessMessageTitle = styled(SuccessMessage)`
  letter-spacing: 1px;
  text-transform: uppercase;

   font-size: 25px;
`;