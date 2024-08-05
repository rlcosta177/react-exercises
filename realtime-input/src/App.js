import React, { useState } from 'react';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return(
    <div className="App">
      <header className="App-header">
        <h1>Real-time Input</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type here"
        />
        <p>"{inputValue}"</p>
      </header>
    </div>
  );
}

export default App;
