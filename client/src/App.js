import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Routes from './routes/Routes.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <Header className="header" />

        <Routes />

      </div>
    );
  }
}

export default App;
