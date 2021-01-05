import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";

const StyledLayout = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
`;
const StyledContainer = styled.div`
    display: grid;
    place-items: center;
`;

const Nomination = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [currentNominations, setCurrentNominations] = useState([])

    const handleSearchResultChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <StyledLayout>
            <StyledContainer>
                <div className = "search-bar">
                    <form>
                        <label>
                            Movie Title:
                            <input type = "text" value = {searchTerm} onChange ={handleSearchResultChange}></input>
                        </label>
                    </form>
                </div>
                <div className = "results-display"> 
                <p> {searchTerm}</p>
                </div>
                <div className = "user-nominations">
                </div>
                <button> Submit </button>
            </StyledContainer>
        </StyledLayout>
    );
};

export default Nomination;