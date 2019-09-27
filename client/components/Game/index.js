import React, { Component } from 'react';
import styled from 'styled-components';

import Card from '../Card';

const DeckWrapper = styled.div`
  position: relative;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

class Game extends Component {
  constructor (props) {
    super(props);
    this.returnState = null;
  }
  
  cardFlip (index) {
    const { deck, lastCardSelected } = this.props.game;
    const { isFlipped } = deck[index];

    if (isFlipped) {
      // I decided that I don't want people unflipping cards
      return;
    } 

    this.props.updateScore(1);
    
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
    const { deck } = this.props.game;

    return (
      <div className='game-wrapper'>
        <DeckWrapper>
          {deck.map((card, i) => <Card key={i} card={card} onClick={() => this.cardFlip(i)} />) }
        </DeckWrapper>
      </div>
    );
  }
};

export default Game;