import React, { useState } from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState('woof');

  function changeWord() {
    if (word === "koufax") {
      setWord("woof");
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
