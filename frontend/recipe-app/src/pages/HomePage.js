import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import SearchResults from "../components/SearchResults";

const HomePage = () => {
  const [userInput, setUserInput] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const searchSubmit = async () => {
    if (userInput) {
      const fetchRecipes = await fetch(
        `${process.env.REACT_APP_SPOONACULAR_URL}${userInput}`
      );
      let data = await fetchRecipes.json();
      setSearchResults(data.results);
    }
  };
  if (searchResults) {
    console.log(searchResults);
  }

  return (
    <Box sx={{ paddingTop: "10%" }}>
      <Box
        sx={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8%",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
        >
          <h3 className="bold-text">FIND</h3>
          <h3 className="bold-text">RECIPES</h3>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", width: "60vh" }}>
          <TextField
            fullWidth
            className="search-input"
            label="What are you craving?"
            sx={{ backgroundColor: "background.paper", color: "primary" }}
            onChange={e => setUserInput(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => searchSubmit()}
            size="large"
            sx={{ fontSize: "22px" }}
          >
            SEARCH
          </Button>
        </Box>
      </Box>
      {searchResults && <SearchResults searchResults={searchResults} />}
    </Box>
  );
};

export default HomePage;
