import React, { Component } from 'react';

export default class GameList extends Component {
  render() {
    return (
      <div className="container">
      <table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Release Year</th>
          </tr>
        </thead>
        <tbody>
          {/* {this.props.games.map(this.renderGame)} */}
        </tbody>
      </table>
    </div>
    );
  }
}