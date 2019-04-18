import actionCreator from '../../../../testHelpers/actionCreator';

import ACTION_TYPES from '../../../actions/constants';
import reducer, { getInitialState } from '../deck';

import mockDeck from '../../../../testHelpers/__mocks__/mockDeck';

describe(`deck.js reducer`, () => {
  const initialState = getInitialState();

  describe('initial state', () => {
    test('it matches the snapshot - default', () => {
      expect(initialState).toMatchSnapshot();
    });
  });

  describe(`the reducer`, () => {
    test('it returns initial state by default', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    });
    
    test(`it doesn't change state unexpectedly`, () => {
      const fakeAction = actionCreator('NOT_A_REAL_ACTION_TYPE')('test-payload');
      expect(reducer(undefined, fakeAction)).toEqual(initialState)
    });

    test(`status is correct for ${ACTION_TYPES.ADD_NEW_DECK}`, () => {
      const payload = { deck: mockDeck };
      const action = actionCreator(ACTION_TYPES.ADD_NEW_DECK)(payload)
      expect(reducer(undefined, action)).toEqual(payload.deck);
    });

    test(`status is correct for ${ACTION_TYPES.CARD_FLIP}`, () => {
      const mockInitialState = mockDeck;
      const payload = { index: 5 };
      const action = actionCreator(ACTION_TYPES.CARD_FLIP)(payload)
      expect(reducer(mockInitialState, action)[0].isFlipped).toEqual(false);
      expect(reducer(mockInitialState, action)[5].isFlipped).toEqual(true);
    });

    test(`status is correct for ${ACTION_TYPES.CARD_MATCHED}`, () => {
      const mockInitialState = mockDeck;
      const payload = { index: 3 };
      const action = actionCreator(ACTION_TYPES.CARD_MATCHED)(payload)
      expect(reducer(mockInitialState, action)[1].hasMatched).toEqual(false);
      expect(reducer(mockInitialState, action)[3].hasMatched).toEqual(true);
    });
  });
});