import React from "react";
import styled from "styled-components";

//styling for the banner wrapper
const Wrapper = styled.div`
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

//styling for the submit button
const SubmitButton = styled.button`
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
        transform: scale(1.02);
    } 
    &:active{
        transform: scale(1.04);
    }
`;

//styling for the info text
const InfoText = styled.h3`
    font-size: 16px;
`;

//banner to appear when user has nominated five movies
const finished = (props) => {
    //quick little function to send the user to the thank you page
    const goToThankYou = () => {
        window.location.assign('/thankyou')
    }
    return (
        <Wrapper>
            <InfoText>Awesome, you've selected five movies! Click the button below to submit your nominations. </InfoText>
            <SubmitButton onClick = {goToThankYou}> Submit </SubmitButton>  
        </Wrapper>
    );
};

export default finished;