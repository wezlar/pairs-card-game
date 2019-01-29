import React, { Component } from 'react';
import styled from 'styled-components';

import Card from './Card';

const DeckWrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class Game extends Component {
  startNewGame () {
    const { game: { numberOfCards }, cards } = this.props;
    const halfNumberOfCards = numberOfCards / 2;
    const indexes = [];

    // select the random cards
    for (let i = 0; i < halfNumberOfCards; i++) {
      const index = Math.floor((Math.random() * cards.length));
      indexes.push(index);
    }

    // create pairs
    const cardDeck = [
      ...indexes,
      ...indexes,
    ];

    // randomise order
    const shuffledDeck = [];
    for (let i = 0; i < numberOfCards; i++) {
      const random = Math.floor((Math.random() * cardDeck.length));

      shuffledDeck.push(cards[cardDeck[random]]);
      cardDeck.splice(random, 1);
    }

    // return deck
    return shuffledDeck;

  }
  
  render () {
    const deck = this.startNewGame();
    return (
      <div>
        <DeckWrapper>
          { deck.map((card, i) => <Card key={ i } card={ card } />) }
        </DeckWrapper>
      </div>
    );
  }
};

export default Game;