import {
  cardFlip,
  cardMatched,
  addNewDeck,
  updateLastCard,
  updateScore,
  updateNumberOfCards,
  updateCardsMatched,
} from './actionCreators';

import mockDeck from '../../testHelpers/__mocks__/mockDeck';

describe(`actionCreators.js`, () => {
  describe(`actions`, () => {
    test(`cardFlip()`, () => {
      const payload = 1;
      expect(cardFlip(payload)).toMatchSnapshot();
    });

    test(`cardMatched()`, () => {
      const payload = 1;
      expect(cardMatched(payload)).toMatchSnapshot();
    });

    test(`addNewDeck()`, () => {
      expect(addNewDeck(mockDeck)).toMatchSnapshot();
    });

    test(`updateLastCard()`, () => {
      expect(updateLastCard(1, '2 of hearts')).toMatchSnapshot();
    });

    test(`updateScore()`, () => {
      expect(updateScore(10)).toMatchSnapshot();
    });

    test(`updateNumberOfCards()`, () => {
      expect(updateNumberOfCards(20)).toMatchSnapshot();
    });
    
    test(`updateCardsMatched()`, () => {
      expect(updateCardsMatched(4)).toMatchSnapshot();
    });
  });
});