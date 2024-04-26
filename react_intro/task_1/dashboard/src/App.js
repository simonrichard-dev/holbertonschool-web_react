import React from 'react';
import './App.css';
import logo from './logo.jpg'; // Make sure to use the correct path to your logo
import { getFullYear, getFooterCopy } from '../src/utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton School Logo" />
        <h1>School dashboard</h1>
      </header>

      <body className="App-body">
          <p className='p-body'>Login to access to the full dashboard</p>
      </body>

      <footer className="App-footer">
        <p className='p-footer'>
        <em><p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p></em>
        </p>
      </footer>
    </div>
  );
}

export default App;
