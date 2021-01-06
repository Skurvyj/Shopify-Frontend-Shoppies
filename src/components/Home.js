import React from "react";
import axios from "axios";
import styled from "styled-components";

const StyledLayout = styled.div`
    display: grid;
    place-items: center;
    color: white;
    height: 100vh;
    font-family: aftetir;
`;

const StyledContainer = styled.div`
    display: grid;
    place-items: center;
`;

const StyledStartButton = styled.button`
    font-size: 14px;
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
    } 
    &:active{
        transform: scale(1.02);
    }
`;


const homepage = (props) => {
    const goToNominationPage = () => {
        window.location.assign('/nominations')
    }
    return (
        <StyledLayout>
            <StyledContainer>
                <h1>Welcome to the Shoppies</h1>
                <h2>Presented by Shopify</h2>
                <p>Nominate your five favorite movies of all time!</p>
                <StyledStartButton onClick = {goToNominationPage} >Get Started</StyledStartButton>
            </StyledContainer>
        </StyledLayout>
    );
};

export default homepage;