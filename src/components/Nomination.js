import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const StyledLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95vw;
    height: 95vh;
    color: white;
    font-family: aftetir;
`;

const StyledContainer = styled.div`
   
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

const StyledLabel = styled.label`
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
    font-size: 14px;
`;

const StyledResultButton = styled.button`
    font-size: 14px;
    background: #d6efc7;
    font-family: aftetir;
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
`;

const StyledShoppies = styled.h1`
    color: #184d47;
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
                    <StyledShoppies> The Shoppies </StyledShoppies>
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
                            <h3>Results for {searchTerm}</h3>
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
                </StyledContainer>
            </StyledLayout>
    );
};

export default Nomination;