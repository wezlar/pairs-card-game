import React, { Component } from 'react';
import { Link } from 'react-router';

import Options from './Options';

import newGame from '../utils/newGame';

class Main extends Component {
  constructor (props) {
    super(props);
    this.startNewGame = this.startNewGame.bind(this);
  }

  componentDidMount () {
    this.startNewGame();
  }

  startNewGame () {
    const { game: { numberOfCards, deck }, cards } = this.props;

    // loop through current deck and set flip to false so
    // new deck does not show before render
    deck.forEach((element, i) => {
      if (element.isFlipped) {
        console.log('Flipping ' + i);
        this.props.cardFlip(i);
      }
    });

    const newDeck = newGame(cards, numberOfCards);
    this.props.addNewDeck(newDeck);
  }
  
  render () {
    const { deck, score, numberOfCards, cardsMatched } = this.props.game;

    return (
      <div>
        <header>
          <h1>
            <Link to="/">Pairs</Link>
          </h1>
          <Options 
            isGameComplete={numberOfCards === cardsMatched}
            score={score} 
            startNewGame={this.startNewGame} />
        </header>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
};

export default Main;