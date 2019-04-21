import actionCreator from '../../../../testHelpers/actionCreator';

import ACTION_TYPES from '../../../actions/constants';
import reducer, { getInitialState } from '../score';

describe(`score.js reducer`, () => {
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

    test(`status is correct for ${ACTION_TYPES.UPDATE_SCORE}`, () => {
      const payload = { score: 5 };
      let action = actionCreator(ACTION_TYPES.UPDATE_SCORE)(payload)
      expect(reducer(undefined, action)).toEqual(5);
      action = actionCreator(ACTION_TYPES.UPDATE_SCORE)(payload)
      expect(reducer(5, action)).toEqual(10);
    });
  });
});