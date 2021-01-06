import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 9vh;
    width: 100%;
    font-family: aftetir;
    background-color: #184d47;
    padding: 10px;
    overflow: hidden;
    border-radius: 10px;
`;

const StyledSubmitButton = styled.button`
    font-size: 14px;
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

const StyledH3 = styled.h3`
    font-size: 16px;
`;


const finished = (props) => {
    const goToThankYou = () => {
        window.location.assign('/thankyou')
    }
    return (
        <StyledWrapper>
            <StyledH3>Awesome, you've selected five movies! Click the button below to submit your nominations. </StyledH3>
            <StyledSubmitButton onClick = {goToThankYou}> Submit </StyledSubmitButton>  
        </StyledWrapper>
    );
};

export default finished;