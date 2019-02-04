import React, { Component } from 'react';
import styled from 'styled-components';

import Card from './Card';
import Score from './Score';

const DeckWrapper = styled.div`
  position: relative;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class Game extends Component {
  constructor (props) {
    super(props);
    this.returnState = null;
  }
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
        hasMatched: false,
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
    const { deck, lastCardSelected } = this.props.game;
    const { isFlipped } = deck[index];

    if (isFlipped) {
      // I decided that I don't want people unflipping cards
      return;
    } 

    // flip card
    this.props.cardFlip(index);
    
    // if first card selected
    if (lastCardSelected.name === '') {
      this.props.updateLastCard(index, deck[index].name);
      return;
    }
    
    // second card selected.
    if (lastCardSelected.name === deck[index].name) {
      this.props.cardMatched(index);
      this.props.cardMatched(lastCardSelected.index);
    } else {
      this.returnState = setInterval(() =>{
        clearInterval(this.returnState);
        this.props.cardFlip(lastCardSelected.index);
        this.props.cardFlip(index);
      }, 1000);
    }

    // clear previous selection
    this.props.updateLastCard(null, '');
  }
  
  render () {
    const { deck } = this.props.game;

    return (
      <div>
        <Score />
        <DeckWrapper>
          {deck.map((card, i) => <Card key={ i } card={ card } onClick={() => this.cardFlip(i)} />) }
        </DeckWrapper>
      </div>
    );
  }
};

export default Game;