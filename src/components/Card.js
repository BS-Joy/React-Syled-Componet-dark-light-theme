import React from 'react';
import { Container, Cards } from './styles/Container.styles';
import { StyledText, StyledImage } from './styles/Custom.styles'
// import Texts from './Texts';
// import '../assets/css/global.css'
// import Button from './Button';
import learn2 from '../assets/images/learn2.svg'


const Card = ({theme}) => {
    return (
        <Container>
            <Cards>
                <StyledText />
                <StyledImage source={learn2} alterText="Learn 2" />
            </Cards>
        </Container>
    );
}

export default Card;
