import React, { FC } from 'react';
import {
  FormInput,
  FormLabel,
  FormLine,
  FormStyled,
  Group,
  ResetButton,
  SubmitButton,
} from '../Components/Form/MovieForm.styled';
import { AuthMain, AuthMainTitle, LoginButtonGroup } from './Auth.styled';

const USER_ID_LABEL = 'USER ID*';
const PASSWORD_LABEL = 'PASSWORD';
const LOGIN_LABEL = 'LOG IN';

export const Auth: FC = () => {
  return (
    <AuthMain>
      <AuthMainTitle>{LOGIN_LABEL}</AuthMainTitle>

      <FormStyled >
        <FormLine>
          <Group>
            <FormLabel>{USER_ID_LABEL}</FormLabel>
            <FormInput type="text"/>
          </Group>
        </FormLine>
        <FormLine>
          <Group>
            <FormLabel>{PASSWORD_LABEL}</FormLabel>
            <FormInput type="text"/>
          </Group>
        </FormLine>
        <LoginButtonGroup>
          <ResetButton>Reset </ResetButton>
          <SubmitButton type='submit' >Log In</SubmitButton>
        </LoginButtonGroup>
      </FormStyled>
    </AuthMain>
  ); 
};