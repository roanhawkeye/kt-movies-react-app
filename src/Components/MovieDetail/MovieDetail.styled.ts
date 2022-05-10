import styled from 'styled-components';
import { HeaderContainer } from '../Header/Header.styled';


export const DetailsContainer = styled(HeaderContainer)`
    background-color: #424242;

    display: flex;
    color: white;
`;

export const DetailsLeftSection = styled.div`
    width: 40%;
    margin-top: 11%;
    margin-left: 10%;
`;

export const DetailsRightSection = styled.div`
    width: 60%;
    margin-top: 11%;
    margin-right: 10%;
`;