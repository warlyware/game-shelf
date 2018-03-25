import React, { Component } from 'react';
import './styles/normalize.css';
import './styles/skeleton.css';

import './App.css';
import SearchBar from './containers/SearchBar';
import SearchList from './containers/SearchList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <GameList />
      </div>
    );
  }
}

export default App;
