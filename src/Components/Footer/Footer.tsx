import React, { ReactElement, FC } from 'react';
import { FooterContent } from './Footer.styled';

interface FooterProps {
    children: (string | ReactElement<any, any> | null);
}

export const Footer: FC<FooterProps> = (props) => {
  return <FooterContent>{props.children}</FooterContent>;
};


