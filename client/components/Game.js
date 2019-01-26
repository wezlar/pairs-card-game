import React, { Component } from 'react';

import Card from './Card';

class Game extends Component {
  render () {
    return (
      <div>
        <p>Game</p>
        { this.props.cards.map((card, i) => <Card key={ i } card={ card } />) }
      </div>
    );
  }
};

export default Game;