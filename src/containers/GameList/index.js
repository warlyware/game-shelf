import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameList extends Component {
  renderGame(game) {
    return(
      <tr key={game.results[0].id}>
        <td>{game.results[0].name}</td>
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
              <th>Stat 1</th>
              <th>Stat 2</th>
              <th>Stat 3</th>
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

export default connect(mapStateToProps)(GameList);