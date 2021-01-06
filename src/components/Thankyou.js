import React from "react";
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

const StyledShoppies = styled.h1`
    color: #184d47;
    font-size: 70px;
    text-align: center;
    max-width: 70%;
`


const StyledInfo = styled.p`
    font-size: 40px;
    text-wrap: wrap;
    text-align: center;
    max-width: 70%;
`

const thankyou = (props) => {
    return (
        <StyledLayout>
            <StyledContainer>
                <StyledShoppies>Thank you for particpating in The Shoppies!</StyledShoppies>
                <StyledInfo> Be sure to tune in and see if your selections win! </StyledInfo>
            </StyledContainer>
        </StyledLayout>
    );
};

export default thankyou;