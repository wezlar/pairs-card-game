import React, { Component } from 'react';
import styled from 'styled-components';

import Card from './Card';
import Options from './Options';

import newGame from '../utils/newGame';

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
    this.startNewGame = this.startNewGame.bind(this);
  }

  componentDidMount () {
    this.startNewGame();
  }

  startNewGame () {
    const { game: { numberOfCards }, cards } = this.props;

    console.log('Start new game function called');
    const newDeck = newGame(cards, numberOfCards);
    this.props.addNewDeck(newDeck);

  }
  
  cardFlip (index) {
    const { deck, lastCardSelected } = this.props.game;
    const { isFlipped } = deck[index];

    this.props.updateScore(1);

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
      this.props.updateCardsMatched(2);
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
    const { deck, score, numberOfCards, cardsMatched } = this.props.game;

    return (
      <div>
        <Options 
          isGameComplete={numberOfCards === cardsMatched}
          score={score} 
          startNewGame={this.startNewGame} />
        <DeckWrapper>
          {deck.map((card, i) => <Card key={ i } card={ card } onClick={() => this.cardFlip(i)} />) }
        </DeckWrapper>
      </div>
    );
  }
};

export default Game;