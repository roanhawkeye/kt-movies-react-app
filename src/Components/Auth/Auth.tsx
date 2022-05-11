import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'StoreTypes';
import { services } from '../../services';
import { AuthStatus, setAuthStatus } from '../../store/auth';
import {
  FormInput,
  FormLabel,
  FormLine,
  FormStyled,
  Group,
  ResetButton,
  SubmitButton,
} from '../Form/MovieForm.styled';
import { AuthMain, AuthMainTitle, LoginButtonGroup } from './Auth.styled';

const USER_ID_LABEL = 'USER ID*';
const PASSWORD_LABEL = 'PASSWORD';
const LOGIN_LABEL = 'LOG IN';

export const Auth: FC = () => {
  const dispatch: Dispatch = useDispatch();
  const [login, setLogin] = useState(process.env.DEFAULT_DEV_LOGIN || '');
  const [password, setPassword] = useState(process.env.DEFAULT_DEV_PASSWORD || '');

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();

    try {
      const isAuthenticated = services.auth.localAuthentication(login, password);
      localStorage.setItem('isAuthenticated', `${isAuthenticated}`);

      if (isAuthenticated) {
        dispatch(setAuthStatus(AuthStatus.Success));
      } else {
        dispatch(setAuthStatus(AuthStatus.Failure));
      }

    } catch (error) {
      console.log('Authentication failed!!');
      console.log(error);
    }
  };

  return (
    <AuthMain>
      <AuthMainTitle>{LOGIN_LABEL}</AuthMainTitle>

      <FormStyled onSubmit={(e) => handleLogin(e)} >
        <FormLine>
          <Group>
            <FormLabel>{USER_ID_LABEL}</FormLabel>
            <FormInput value={login} type="text" onChange={(e) => setLogin(e.target.value)}/>
          </Group>
        </FormLine>
        <FormLine>
          <Group>
            <FormLabel>{PASSWORD_LABEL}</FormLabel>
            <FormInput value={password} type="text" onChange={(e) => setPassword(e.target.value)} />
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