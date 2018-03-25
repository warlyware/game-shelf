import React, { Component } from 'react';

import './styles';

import SearchBar from './containers/SearchBar';
import SearchList from './containers/SearchList';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="three columns">
            <SearchBar />
            <SearchList />
          </div>
          <div className="nine columns">
            <SearchList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
