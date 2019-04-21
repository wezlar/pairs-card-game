import actionCreator from '../../../../testHelpers/actionCreator';

import ACTION_TYPES from '../../../actions/constants';
import reducer, { getInitialState } from '../lastCardSelected';

import mockDeck from '../../../../testHelpers/__mocks__/mockDeck';

describe(`lastCardSelected.js reducer`, () => {
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

    test(`status is correct for ${ACTION_TYPES.CARD_SELECTED}`, () => {
      const payload = { index: 5, name: 'TEST CARD' };
      const action = actionCreator(ACTION_TYPES.CARD_SELECTED)(payload)
      expect(reducer(undefined, action)).toEqual({ ...initialState, ...payload });
    });
  });
});