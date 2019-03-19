import React from 'react';
import { mount } from 'enzyme';
import { MockSimpleChild } from '@jest-helpers/components';
import mockDeck from '../../../testHelpers/__mocks__/mockDeck';
import Component from './Main';

const mockProps = {
  game: {
    numberOfCards: 10,
    score: 0,
    cardsMatched: 0,
    deck: mockDeck,
  },
};

describe(`<Main />`, () => {
  test(`It doesn't blow up` , () => {
    const tree = mount(<Component {...mockProps}><MockSimpleChild /></Component>);
    expect(tree.length).toEqual(1);
  });

  test(`Renders correctly`, () => {
    const main = mount(<Component {...mockProps}><MockSimpleChild /></Component>);
    expect(main.debug()).toMatchSnapshot();
  });
});