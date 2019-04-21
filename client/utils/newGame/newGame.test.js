import React from 'react'
import { shallow } from 'enzyme'
import newGame from './index';
import cards from '../../data/cards'

describe(`newGame util`, () => {
  test(`Test that shuffled deck returned`, () => {
    let newDeck = newGame(cards, 5);
    expect(newDeck.length).toBe(6);
    
    newDeck = newGame(cards, 10);
    expect(newDeck.length).toBe(10);

    newDeck = newGame(cards, 20);
    expect(newDeck.length).toBe(20);

    newDeck = newGame(cards, 0);
    expect(newDeck.length).toBe(0);

    newDeck = newGame({}, 20);
    expect(newDeck.length).toBe(0);
  });

  test(`Test card has extra fields set`, () => {
    let newDeck = newGame(cards, 10);
    expect(newDeck[0].isFlipped).toBe(false);
    expect(newDeck[0].hasMatched).toBe(false);
    expect(newDeck[0].cardIndex).to
  })
});