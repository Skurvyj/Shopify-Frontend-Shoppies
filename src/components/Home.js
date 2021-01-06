import React from "react";
import axios from "axios";
import styled from "styled-components";

const StyledLayout = styled.div`
    display: grid;
    place-items: center;
    color: white;
    height: 95vh;
    font-family: aftetir;
`;

const StyledContainer = styled.div`
    display: grid;
    place-items: center;
`;

const StyledStartButton = styled.button`
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
    } 
    &:active{
        transform: scale(1.02);
    }
`;

const StyledShoppies = styled.h1`
    color: #184d47;
    font-size: 70px;
    text-align: center;
`

const StyledTagline = styled.h2`
    color: #184d47;
    font-size: 30px;
`

const StyledInfo = styled.p`
    font-size: 40px;
    text-wrap: wrap;
    text-align: center;
    max-width: 70%;
`



const homepage = (props) => {
    const goToNominationPage = () => {
        window.location.assign('/nominations')
    }
    return (
        <StyledLayout>
            <StyledContainer>
                <StyledShoppies>Welcome to the Shoppies!</StyledShoppies>
                <StyledTagline>Presented by Shopify</StyledTagline>
                <StyledInfo> Where <i> you </i> decide what movies are up for nomination </StyledInfo>
                <StyledStartButton onClick = {goToNominationPage} >Get Started</StyledStartButton>
                
            </StyledContainer>
        </StyledLayout>
    );
};

export default homepage;