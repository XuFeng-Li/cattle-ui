import React from 'react';
import logo from './logo.svg';
import './App.css';
import Info from 'cattle-info';
import Upload from 'cattle-upload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Info title='标题' info={9999999999} />
        <Upload />
        123123
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
