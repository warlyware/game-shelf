import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { saveGame } from '../../actions';

class SearchList extends Component {
  static defaultProps = {
    saveGame: () => {}
  }

  handleClick = (game) => {
    console.log('click');
    this.props.saveGame(game);
  }

  renderGame(game) {
    return(
      <tr key={game.id}>
        <td>{game.name}</td>
        <td><button onClick={() => this.handleClick(game)}>Add</button></td>
      </tr>
    );
  }

  render() {
    return(
      <div className="container">
        <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.search.length ?
              this.props.search.map(result => this.renderGame(result)):
              null
            }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveGame: saveGame }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchList);