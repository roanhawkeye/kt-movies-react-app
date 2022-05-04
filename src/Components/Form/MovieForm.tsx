import React, { FC, FormEvent } from 'react';

import { 
  FormLabel, 
  FormInput, 
  FormStyled, 
  Group, 
  FormLine, 
  SingleGroup, 
  TextArea, 
  ResetButton, 
  SubmitButton, 
  ButtonLine, 
} from './MovieForm.styled';

interface MovieFormProps {
    onSubmit?(event: FormEvent): void; 
    onReset?(): void;
}

export const MovieForm: FC<MovieFormProps> = ({ onSubmit, onReset }) => {

  const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      
      if (onSubmit) {
          onSubmit(event);
      }
  };
    
  const handleReset = () =>{
    if (onReset) {
          onReset();
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <FormLine>
        <Group>
          <FormLabel>Title</FormLabel>
          <FormInput type="text"/>
        </Group>
        <Group>
          <FormLabel>Release Date</FormLabel>
          <FormInput type="text"/>
        </Group>
      </FormLine>
      <FormLine>
        <Group>
          <FormLabel>Movie URL</FormLabel>
          <FormInput type="text"/>
        </Group>
        <Group>
          <FormLabel>Rating</FormLabel>
          <FormInput type="text"/>
        </Group>
      </FormLine>
      <FormLine>
        <Group>
          <FormLabel>Genre</FormLabel>
          <FormInput type="text"/>
        </Group>
        <Group>
          <FormLabel>Runtime</FormLabel>
          <FormInput type="text"/>
        </Group>
      </FormLine>
      <FormLine>
        <SingleGroup>
          <FormLabel>Overview</FormLabel>
          <TextArea />
        </SingleGroup>
      </FormLine>
      <ButtonLine>
        <ResetButton onClick={handleReset} >Reset </ResetButton>
        <SubmitButton type='submit' >Submit</SubmitButton>
      </ButtonLine>
    </FormStyled>
  );
};