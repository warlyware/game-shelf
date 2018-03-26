import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameList extends Component {
  renderGame = (game) => {
    return(
      <tr key={game.id}>
        <td>{game.name}</td>
      </tr>
    );
  }

  render() {
    return (
      <div className="container">
      <table className="margin-top-4">
        <thead>
          <tr>
            <th>Game</th>
            <th>Release Year</th>
          </tr>
        </thead>
        <tbody>
          {this.props.savedGames.map(game =>this.renderGame(game))}
        </tbody>
      </table>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    savedGames: state.savedGames
  }
}

export default connect(mapStateToProps)(GameList);