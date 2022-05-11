import styled from 'styled-components';
import { Box } from '../Box/Box';

export const FormLabel = styled.label`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
/* identical to box height */

  letter-spacing: 0.888889px;
  text-transform: uppercase;

  color: #F65261;

  mix-blend-mode: normal;
  opacity: 0.8;
`;

export const FormInput = styled.input`
  background: rgba(50, 50, 50, 0.948044);
  mix-blend-mode: normal;
  opacity: 0.8;
  border-radius: 4px;
  height: 30px;
  color: #FFFFFF;
`;

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const SingleGroup = styled(Group)`
    width: 90%;
`;

export const TextArea = styled.textarea`
  background: rgba(50, 50, 50, 0.948044);
  mix-blend-mode: normal;
  opacity: 0.8;
  border-radius: 4px;
  height: 90px;
`;

export const FormLine = styled(Box)`
    display: flex;
    justify-content: space-around;
`;

const FormButton = styled.button`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    margin: 10px;
`;

export const SubmitButton = styled(FormButton)`
    background: #F65261;
    border-radius: 4px; 

    color: #FFFFFF;
`;

export const ResetButton = styled(FormButton)`
    border: 1.5px solid #F65261;
    box-sizing: border-box;
    border-radius: 4px;

   color: #F65261; 
`;

export const ButtonLine = styled(Box)`
    display: flex;
    justify-content: flex-end;
    margin-right: 4%;
    margin-bottom: 4%;
`;