import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
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


const thankyou = (props) => {
    return (
        <StyledWrapper>
            <h1>Welcome to the Shoppies</h1>
            <h2>Presented by Shopify</h2>
            <p>Nominate your five favorite movies of all time!</p>   
        </StyledWrapper>
    );
};

export default thankyou;