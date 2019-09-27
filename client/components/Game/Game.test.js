import React from 'react';
import { shallow } from 'enzyme';
import Component from './index';

import mockDeck from '../../../testHelpers/__mocks__/mockDeck';

const mockProps = {
  game: {
    deck: mockDeck,
  },
};

describe('<Game />', () => {
  test('It doesn\'t blow up' , () => {
    const tree = shallow(<Component {...mockProps} />);
    expect(tree.length).toEqual(1);
  });

  test('Renders correctly', () => {
    const main = shallow(<Component {...mockProps} />);
    expect(main.debug()).toMatchSnapshot();
  });
});