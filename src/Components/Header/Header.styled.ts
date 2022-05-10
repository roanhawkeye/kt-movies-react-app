import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { InjectedBoxProps } from '../../theme/mixin/box/box';
import { SC } from '../../theme/styled-component';

import { boxSystem } from '../../theme/mixin';

interface HeaderContainterProps {
  imageBackgroundUrl?: string;
}

export const HeaderContainer = styled.div<HeaderContainterProps>`
  height: 396px;
  left: 58px;
  top: 54px;

  background: #000000;
  background-image: url(${(props) => props.imageBackgroundUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  margin-bottom: 10px;
`;

export const TopLeftTitle = styled.div`
  position: absolute;
  width: 151px;
  height: 24px;
  left: 118px;
  top: 74px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;

  color: #f65261;
`;

export const Title = styled.div`
  position: absolute;
  width: 392px;
  height: 49px;
  left: 178px;
  top: 155px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #ffffff;
`;

type ButtonBoxProps = InjectedBoxProps<ButtonHTMLAttributes<any>>;

interface TopRighButtonProps {
  right: string;
  top: string;
}

export const TopRightButton: SC<ButtonBoxProps> = styled.div<TopRighButtonProps>`
  position: fixed;
  right: ${(props) => props.right}%;
  top: ${(props) => props.top}%;

  background: rgba(96, 96, 96, 0.68);
  border-radius: 4px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
  text-transform: uppercase;

  color: #f65261;

  padding: 5px;
`;

export const SearchInput = styled.input`
  background: rgba(50, 50, 50, 0.8);
  mix-blend-mode: normal;
  opacity: 0.7;
  border-radius: 4px;
  width: 50%;
  height: 25px;

  position: absolute;
  left: 178px;
  top: 225px;

  color: white;
`;

export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 4%;

  margin-left: 4%;
  border-bottom: 3px solid #f65261;
`;

export const Navigation = styled.ul`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-transform: uppercase;

  color: #ffffff;
`;

export const NavigationOption = styled.li`
  display: inline;
  padding: 10px 20px;

  &:hover {
    background-color: #f65261;
  }
`;

export const DropdownLabel = styled.label`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  margin-right: 10px;

  letter-spacing: 0.888889px;
  text-transform: uppercase;

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.6;
`;

export const SelectBox = styled.select`
  ${boxSystem}
`;

export const OptionBox = styled.option`
  ${boxSystem}
`;
