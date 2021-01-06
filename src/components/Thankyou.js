import React from "react";
import styled from "styled-components";


//layout centers everything
const Layout = styled.div`
    display: grid;
    place-items: center;
    color: white;
    height: 95vh;
    font-family: aftetir;
`;

//contains all the page text
const Container = styled.div`
    display: grid;
    place-items: center;
`;

//thank you text
const Shoppies = styled.h1`
    color: #184d47;
    font-size: 70px;
    text-align: center;
    max-width: 70%;
`

//info text
const Info = styled.p`
    font-size: 40px;
    text-wrap: wrap;
    text-align: center;
    max-width: 70%;
`

const thankyou = (props) => {
    return (
        <Layout>
            <Container>
                <Shoppies>Thank you for participating in The Shoppies!</Shoppies>
                <Info> Be sure to tune in and see if your selections win! </Info>
            </Container>
        </Layout>
    );
};

export default thankyou;