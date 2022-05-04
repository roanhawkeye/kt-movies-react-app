import styled from 'styled-components';
import { Box } from '../Box/Box';
import { Navigation, NavigationOption } from '../Header/Header.styled';

interface HamburgerMenuStyledProps {
  show: boolean;
}

export const HamburgerMenuStyled = styled.div<HamburgerMenuStyledProps>`
  position: absolute;
  width: 36px;
  height: 36px;

  background: #2a202d;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.196596);
  color: white;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  border-radius: 20px;
  writing-mode: vertical-rl;
  margin-left: 4px;
  margin-top: 4px;

  display: ${(props) => props.show ? 'block' : 'none'}

`;

interface HamburgerMenuDetailsProps {
  show: boolean;
  isParentShow: boolean;
}

export const HamburgerMenuDetails = styled(Box)<HamburgerMenuDetailsProps>`
  writing-mode: horizontal-tb;
  writing-mode: horizontal-tb;
  left: 5px;
  position: absolute;
  top: 38px;

  display: ${(props) => props.show && props.isParentShow ? 'block' : 'none'};
`;

export const MenuList = styled(Navigation)`
  text-transform: capitalize;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  background-color: #424242;
`;

export const MenuOption = styled(NavigationOption)`
  display: block;
`;

export const HamburgerIcon = styled.span`

`;



