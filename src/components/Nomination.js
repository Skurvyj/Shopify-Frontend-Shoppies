import React, {useState, useEffect} from "react";
import axios from "axios";
import styled, {keyframes} from "styled-components";
import FinishedBanner from"./FinishedBanner";

//sets up layout for page
const Layout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 95vh;
    color: white;
    font-family: aftetir;
    min-width: 50%;
`;

//container where all the content is
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   
`;

//the search bar container 
const SearchBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

//the actual input field itself
const Input = styled.input`
    width: 60vw;
    padding: 10px;
    margin: 5px;
    border-radius: 30px;
    border-style: none;
    &:focus{
        outline: none;
    }
`;


//lower row on the page, containing the results/nominations
const resultsAnimation = keyframes`
    from {
        height: 0vh;
        opacity: 0;
    }
    to {
        height: 60vh;
        opacity: 1;
    }
`

const LowerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    animation-name: ${resultsAnimation};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
`;



//content box to hold results/nominations
const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
    background-color: #184d47;
    width: 30vw;
    height: 60vh;
    min-width: 300px;
    min-height: 300px;
    text-align: center;
    margin: 5px;
    
`;

//box to hold the actual text + button
const ResultBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    text-align: center;
    margin-bottom: 20px;
`;

//search result
const SearchResult = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px;
    font-size: 16px;
    &:hover{
        transform: scale(1.02);
        color: #d6efc7;
    } 
`;

//nominate or remove button
const ResultButton = styled.button`
    font-size: 16px;
    background: #d6efc7;
    font-family: aftetir;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 6px;
    max-height: 40px;
    height: 20px;
    align-self: center;
    border-style: none;
    &:focus{
        outline: none;
    }
    &:disabled{
        color: #999b84;
    }
    &:hover{
        opacity: 0.8;
    } 
    &:active{
        transform: scale(1.02);
    }
`;

// the shoppies text
const Shoppies = styled.h1`
    color: #184d47;
`;

//popup banner
const bannerAnimation = keyframes`
    0%{
        transform: scale(1)
    }
    50%{
        transform: scale(1.04)
    }
    100%{
        transform: scale (1)
    }
`
const Banner  = styled.div`
    position: relative;
    top: 20px;
    animation-name: ${bannerAnimation};
    animation-duration: 0.3s;
    animation-iteration-count: 1;
`;

//instructions for nominating
const Instructions = styled.p`
    position: relative;
    top: 20px;
    font-size: 24px;
    color: #184d47;
`;

//header for the results box
const ResultsHeader = styled.h3`
    max-width: 80%;
    min-height: 5%;
    overflow: hidden;
`;



const Nomination = (props) => {
    //string for the current search term
    const [searchTerm, setSearchTerm] = useState("");

    //array of the current search results
    const [searchResults, setSearchResults] = useState([]);

    //handles if we just show search bar, or results as well
    const [showResults, setShowResults] = useState(false);

    //array of the current nominations
    const [currentNominations, setCurrentNominations] = useState([]);

    //boolean that indicates whether there are 5 nominations or not
    const [finished, setFinished] = useState(false);

    //updates the search term when it is changed
    const searchTermChange = (e) => {
        setSearchTerm(e.target.value)
        if(!showResults){
            setShowResults(true)
        }
    };

    //handles the API call and displaying the search results when the search term changes
    const handleSearchTermChange = () => {
        axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie&s=${searchTerm}`
        ).then(function(response){
            if(response.data.Search !== undefined){
                setSearchResults(response.data.Search)
            }   
        })
    };

    //turns the search result array into JSX elements
    const searchResultsDisplay = searchResults.map((movie) => 
        <SearchResult>
            <p key = {movie.imdbID}> {movie.Title} ({movie.Year}) </p>
            <ResultButton 
                onClick={() => addNomination(movie)}
                disabled = {currentNominations.includes(movie) || finished}
            > Nominate </ResultButton>
        </SearchResult>

    );

    //turns the nomination array into JSX elements
    const nominationsDisplay = currentNominations.map((movie) => 
        <SearchResult>
            <p key={movie.imdbID}> {movie.Title} ({movie.Year}) </p>
            <ResultButton 
                onClick = {() => removeNomination(movie.imdbID)}
            > Remove </ResultButton>
        </SearchResult>
    );


    //adds a movie to the nomination array
    const addNomination = (movie) => {
        setCurrentNominations([...currentNominations, movie]); 
    }

    //removes a movie from the nomination array
    const removeNomination = (movID) => {
        setCurrentNominations(currentNominations.filter((mov) => mov.imdbID !== movID))
    }

    //checks if 5 movies have been nominated, updates finished accordingly
    const checkIfFinished = () => {
        setFinished(currentNominations.length >= 5)
    }


    //runs when current nominations is changed
    useEffect(() => {
        checkIfFinished();
    }, [currentNominations])

    //runs when the search term is changed
    useEffect(() => {
        handleSearchTermChange();
    }, [searchTerm])
    return (
            <Layout>
                <Container>
                    <Shoppies> The Shoppies - Nomination Center </Shoppies>
                    <SearchBar className = "search-bar">
                        <Input id = "title" 
                                     type = "text" 
                                     value = {searchTerm} 
                                     autoComplete ="off"
                                     placeholder = "Search for a movie title"
                                     onChange ={searchTermChange}>
                                     </Input>
                    </SearchBar>
                    {showResults ? 
                    <LowerRow>
                        <ContentBox>
                            <ResultsHeader>Results for {searchTerm}</ResultsHeader>
                            <ResultBox className = "results-display"> 
                                {searchResultsDisplay}
                            </ResultBox>
                         </ContentBox>
                        <ContentBox>
                             <h3> Nominations </h3>
                            <ResultBox className = "user-nominations">
                                {currentNominations.length != 0 ?
                                 nominationsDisplay
                                : <p> No nominations yet! </p>}
                            </ResultBox>
                        </ContentBox>
                    </LowerRow>
                    : undefined }
                    {finished ? 
                    <Banner>
                        <FinishedBanner>
                        </FinishedBanner>
                    </Banner>
                    : <Instructions> Search for and select <strong>{5 - currentNominations.length}</strong> movies to nominate for The Shoppies!</Instructions>}
                    
                </Container>
            </Layout>
    );
};

export default Nomination;