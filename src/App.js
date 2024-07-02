import React, { useState } from 'react';  
import chinos from "./images/chinos.jpg";
import shirts from "./images/shirts.jpg";
import shoes from "./images/shoes.jpg";
import './App.css';

const products = [
  {id: 1, name: 'DENIM', price: 10, image: chinos},
  {id: 2, name: 'AMERICAN POLO', price: 9.30, image: shirts},
  {id: 3, name: 'NIKE', price: 35, image: shoes},
  
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
