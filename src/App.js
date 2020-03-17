import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
          var person= {name : "Dr.Mafuz", age: 45, gender  :"Male"}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
              <h1>{person.name + " " +person.gender+" " +person.gender}</h1>
              


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
