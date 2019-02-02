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
      // TODO: check that card has not already been selected
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

      const selectedCard = {
        ...cards[cardDeck[random]],
        isFlipped: false,
      }
      shuffledDeck.push(selectedCard);
      cardDeck.splice(random, 1);
    }

    // return deck
    this.props.addNewDeck(shuffledDeck);
  }

  componentDidMount () {
    this.startNewGame();
  }
  
  cardFlip (index) {
    this.props.cardFlip(index);
  }
  
  render () {
    const { deck } = this.props.game;


    return (
      <div>
        <DeckWrapper>
          {deck.map((card, i) => <Card key={ i } card={ card } onClick={() => this.cardFlip(i)} />) }
        </DeckWrapper>
      </div>
    );
  }
};

export default Game;