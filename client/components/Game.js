import React, { Component } from 'react';

import Card from './Card';

class Game extends Component {
  startNewGame () {
    const { game: { numberOfCards }, cards } = this.props;
    const halfNumberOfCards = numberOfCards / 2;

    for (let i = 0; i < halfNumberOfCards; i++) {
      const index = Math.floor((Math.random() * cards.length) + 1);
      console.log(index);
    }

  }
  
  render () {
    this.startNewGame();
    return (
      <div>
        <p>Game</p>
        
      </div>
    );
  }
};

export default Game;