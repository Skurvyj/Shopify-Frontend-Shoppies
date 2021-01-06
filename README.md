# The Shoppies
A simple web app where you can nominate 5 movies for a fictional awards show, The Shoppies. <br/>
Built for the Shopify Frontend Intern Challenge <br/>
Hosted on Heroku at: https://shoppies-mccauley.herokuapp.com

# Technical Requirements
1) Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx). <br/>
2) Each search result should list at least its title, year of release and a button to nominate that film. <br/>
3) Updates to the search terms should update the result list. <br/>
4) Movies in search results can be added and removed from the nomination list. <br/>
5) If a search result has already been nominated, disable its nominate button. <br/>
6) Display a banner when the user has 5 nominations. <br/>

# Design
I made a single page application with a BrowserRouter <br/>
It has some simple, non-intrusive animations and the color scheme <br/>
was inspired by Shopify's logo and website. <br/>
I used the OMDb API and Axios to help make calls and Styled Components to keep my CSS near my JS <br/>
Other than that it's pretty much built from scratch in React

# Known Issues
The nominations interface is definitely not optimized for mobile, </br>
In the future I'll fix that using media queries
