import React, { useState } from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState('bark');

  function changeWord() {
    if (word === "koufax") {
      setWord("bark");
    } else {
      setWord("koufax");
    }
  } 

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={changeWord} alt="button">Change word</button>
        <p aria-label="text">
          {word}
        </p>
      </header>
    </div>
  );
}

export default App;
