import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    searchTerm: '',
  }

  onInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit} className="container">
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

