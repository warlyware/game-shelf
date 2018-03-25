import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchForGame } from '../../actions';

class SearchBar extends Component {
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
    this.props.searchForGame(this.state.searchTerm);
    this.setState({
      searchTerm: ''
    });
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit} className="container padding-top-16">
          <input placeholder="Search for Games"
            type="text"
            value={this.state.searchTerm}
            onChange={this.onInputChange}
          />
          <button type="submit">Submit</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchForGame: searchForGame }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
