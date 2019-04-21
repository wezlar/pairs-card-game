import ACTION_TYPES from './constants';

describe(`actionCreators.js`, () => {
  describe(`ACTION_TYPES`, () => {
    test(`it matches the snapshot`, () => {
      expect(ACTION_TYPES).toMatchSnapshot();
    });
  });
});