import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchList extends Component {
  renderGame(game) {
    return(
      <tr key={game.id}>
        <td>{game.name}</td>
      </tr>
    );
  }

  render() {
    return(
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Game</th>
            </tr>
          </thead>
          <tbody>
            {this.props.games.map(this.renderGame)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    games: state.games
  };
}

export default connect(mapStateToProps)(SearchList);