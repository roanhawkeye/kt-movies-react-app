import styled from 'styled-components';

interface CustomButtonProps {
  left: string;
  width: string;
  color: string;
  top: string;
}

export const CustomButton = styled.button<CustomButtonProps>`
  background: ${(props) => props.color};
  border-radius: 4px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  position: absolute;
  left: ${(props) => props.left}%;
  top: ${(props) => props.top}px;
  width: ${(props) => props.width};
`;
