import React, {useState, useEffect} from "react";
import axios from "axios";
import styled, {keyframes} from "styled-components";
import FinishedBanner from"./FinishedBanner";

const StyledLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 95vh;
    color: white;
    font-family: aftetir;
    min-width: 50%;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   
`;

const StyledSearchBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledInput = styled.input`
    width: 60vw;
    padding: 10px;
    margin: 5px;
    border-radius: 30px;
    border-style: none;
    &:focus{
        outline: none;
    }
`;


const StyledLowerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const StyledContentBox = styled.div`
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

const StyledResultBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    text-align: center;
    margin-bottom: 20px;
`;

const StyledSearchResult = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px;
    font-size: 16px;
    animation: 
`;

const StyledResultButton = styled.button`
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

const StyledShoppies = styled.h1`
    color: #184d47;
`;

const StyledBanner  = styled.div`
    position: relative;
    top: 20px;
`;

const StyledInstructions = styled.p`
    position: relative;
    top: 20px;
    font-size: 16px;
    color: #184d47;
`;

const StyledResultsHeader = styled.h3`
    max-width: 80%;
    min-height: 5%;
    overflow: hidden;
`;



const Nomination = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [currentNominations, setCurrentNominations] = useState([]);
    const [finished, setFinished] = useState(false);

    const searchTermChange = (e) => {
        setSearchTerm(e.target.value)
    };

    const handleSearchTermChange = () => {
        axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie&s=${searchTerm}`
        ).then(function(response){
            if(response.data.Search !== undefined){
                setSearchResults(response.data.Search)
            }   
        })
    };

    const searchResultsDisplay = searchResults.map((movie) => 
        <StyledSearchResult>
            <p key = {movie.imdbID}> {movie.Title} ({movie.Year}) </p>
            <StyledResultButton 
                onClick={() => addNomination(movie)}
                disabled = {currentNominations.includes(movie) || finished}
            > Nominate </StyledResultButton>
        </StyledSearchResult>

    );

    const nominationsDisplay = currentNominations.map((movie) => 
        <StyledSearchResult>
            <p key={movie.imdbID}> {movie.Title} ({movie.Year}) </p>
            <StyledResultButton 
                onClick = {() => removeNomination(movie.imdbID)}
            > Remove </StyledResultButton>
        </StyledSearchResult>
    );

    const addNomination = (movie) => {
        setCurrentNominations([...currentNominations, movie]);
        
    }

    const removeNomination = (movID) => {
        setCurrentNominations(currentNominations.filter((mov) => mov.imdbID !== movID))
    }

    const checkIfFinished = () => {
        setFinished(currentNominations.length >= 5)
    }


    useEffect(() => {
        checkIfFinished();
    }, [currentNominations])

    useEffect(() => {
        handleSearchTermChange();
    }, [searchTerm])
    return (
            <StyledLayout>
                <StyledContainer>
                    <StyledShoppies> The Shoppies - Brought to You by Shopify </StyledShoppies>
                    <StyledSearchBar className = "search-bar">
                        <StyledInput id = "title" 
                                     type = "text" 
                                     value = {searchTerm} 
                                     placeholder = "Enter a Movie Title to Get Started"
                                     onChange ={searchTermChange}>
                                     </StyledInput>
                    </StyledSearchBar>
                    <StyledLowerRow>
                        <StyledContentBox>
                            <StyledResultsHeader>Results for {searchTerm}</StyledResultsHeader>
                            <StyledResultBox className = "results-display"> 
                                {searchResultsDisplay}
                            </StyledResultBox>
                         </StyledContentBox>
                    
                        <StyledContentBox>
                             <h3> Nominations </h3>
                            <StyledResultBox className = "user-nominations">
                                 {nominationsDisplay}
                            </StyledResultBox>
                        </StyledContentBox>
                    </StyledLowerRow>
                    {finished ? 
                    <StyledBanner>
                        <FinishedBanner>
                        </FinishedBanner>
                    </StyledBanner>
                    : <StyledInstructions> Search for and select five movies to nominate for The Shoppies!</StyledInstructions>}
                    
                </StyledContainer>
            </StyledLayout>
    );
};

export default Nomination;