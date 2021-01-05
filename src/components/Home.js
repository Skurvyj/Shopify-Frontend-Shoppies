import React from "react";
import axios from "axios";
import styled from "styled-components";

const StyledLayout = styled.div`
    display: grid;
    place-items: center;
    color: white;
    height: 100vh;
`;

const StyledContainer = styled.div`
    display: grid;
    place-items: center;

`;


const homepage = (props) => {
    return (
        <StyledLayout>
            <StyledContainer>
                <h1>Welcome to the Shoppies</h1>
                <h2>Presented by Shopify</h2>
                <p>Nominate your five favorite movies of all time!</p>
                <button>Get Started</button>
            </StyledContainer>
        </StyledLayout>
    );
};

export default homepage;