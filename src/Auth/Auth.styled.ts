import styled from 'styled-components';
import { ButtonLine } from '../Components/Form/MovieForm.styled';
import { SC } from '../theme/styled-component';


export const AuthMain: SC = styled.section`
    margin: auto;
    width: 60%;
    position: relative;

    display: flex;
    flex-direction: column;

    background: #232323;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.07), 0px 10px 20px rgba(0, 0, 0, 0.05), 0px 10px 50px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
`;

export const AuthMainTitle: SC = styled.h1`
    align-self: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 49px;
    /* identical to box height */

    letter-spacing: 1px;
    text-transform: uppercase;

    color: #FFFFFF; 
`;

export const LoginButtonGroup: SC = styled(ButtonLine)`
    align-self: center;
`;