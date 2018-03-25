import React, { Component } from 'react';
import axios from 'axios';

import API_KEY from '../../API_KEY';

const giantBombApiUrl = `
  https://www.giantbomb.com/api/search/?api_key=${API_KEY}&format=JSON
`;

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
    axios.get(`${giantBombApiUrl}&query=${this.state.searchTerm}`)
    .then((data) => {
      console.log(data);
    }).catch((error) => {
      console.error(error);
    });
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

