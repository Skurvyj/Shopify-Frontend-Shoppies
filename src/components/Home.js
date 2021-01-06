import React from "react";
import styled, {keyframes} from "styled-components";
import reel from '../images/filmreel.png'


//page layout, centers everything
const Layout = styled.div`
    display: grid;
    place-items: center;
    color: white;
    height: 95vh;
    font-family: aftetir;
`;

//a container within the layout that has all our page content
const Container = styled.div`
    display: grid;
    place-items: center;
`;


//styling for the get started button
const StartButton = styled.button`
    font-size: 20px;
    cursor: pointer;
    background: #d6efc7;
    font-family: aftetir;
    border-radius: 5px;
    height: 40px;
    align-self: center;
    border-style: none;
    &:focus{
        outline: none;
    }
    &:hover{
        opacity: 0.8;
        transform: scale(1.02);
    } 
    &:active{
        transform: scale(1.04);
    }
`;

//the welcome text
const Shoppies = styled.h1`
    color: #184d47;
    font-size: 70px;
    text-align: center;
`

//the branding text
const Tagline = styled.h2`
    color: #184d47;
    font-size: 30px;
`

//the explainer text
const Info = styled.p`
    font-size: 40px;
    text-wrap: wrap;
    text-align: center;
    max-width: 70%;
`

//animation and styling for the reel
const reelAnimation = keyframes`
    from {
    transform: rotate(0deg);
      }
   to {
    transform: rotate(359deg);
     }
}

`

const FilmReel = styled.img`
    width: 15vh;
    height: auto;
    cursor: pointer;
    &:hover{
        animation: ${reelAnimation} 3s infinite linear;
    } 
`

const homepage = (props) => {

    //sends the user to the nomination page
    const goToNominationPage = () => {
        window.location.assign('/nominations')
    }
    
    return (
        <Layout>
            <Container>
                <Shoppies>Welcome to The Shoppies!</Shoppies>
                <Tagline>Presented by Shopify</Tagline>
                <FilmReel src = {reel} alt= ""></FilmReel>
                <Info> Where <i> you </i> decide which movies get nominated </Info>
                <StartButton onClick = {goToNominationPage} >Get Started</StartButton>    
            </Container>
        </Layout>
    );
};

export default homepage;