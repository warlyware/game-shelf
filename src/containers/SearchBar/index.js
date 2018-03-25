import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    searchTerm: '',
  }

  onInputChange = (event) => {
    event.preventDefault();
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    return(
      <form className="container">
          <input
            placeholder="Search for Games"
            type="text"
            value={this.state.searchTerm}
            onChange={this.onInputChange}
          />
          <button type="submit">Submit</button>
      </form>
    );
  }

}

