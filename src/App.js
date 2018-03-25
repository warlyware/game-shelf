import React, { Component } from 'react';
import './styles/normalize.css';
import './styles/skeleton.css';

import './App.css';
import SearchBar from './containers/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
