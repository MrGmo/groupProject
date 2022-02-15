import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles/'
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

// MUI THEME
export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#05386b',
    },
    secondary: {
      main: '#379683',
    },
    background: {
      default: '#5cdb95',
      paper: '#edf5e1',
    },
    success: {
      main: '#000000',
    },
    text: {
      primary: '#05386b',
    },
  },
})


function App() {

  
  return (
    <div className="App">
      <div className="background-div">
      <ThemeProvider theme={theme}>
      
      <Router>  
        <NavBar/>
          <Routes>
          <Route path="/" element={<HomePage/>}/>
          </Routes>
      </Router>
      </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
