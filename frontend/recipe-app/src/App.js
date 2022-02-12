import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [userInput, setUserInput] = useState(null)


  const postToBackend = () => {
    console.log(userInput)
  }
  return (
    <div className="App">
      <h1>Recipe App</h1>
      <h2>It's Working</h2>
      <input onChange={e => setUserInput(e.target.value)} type="text" />
      <button onClick={postToBackend}>Press Me</button>
    </div>
  );
}

export default App;
