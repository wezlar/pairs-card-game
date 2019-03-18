import React from 'react';
import { shallow } from '@jest-helpers/renderer';
import { MockSimpleChild } from '@jest-helpers/components';
import { Main as Component } from './Main';

const mockDeck = [
  {
    cardIndex: 0,
    hasMatched: false,
    image: 'images/svg-cards/2_of_hearts.svg',
    isFlipped: false,
    name: '2 of hearts',
  },
  {
    cardIndex: 1,
    hasMatched: false,
    image: 'images/svg-cards/3_of_hearts.svg',
    isFlipped: false,
    name: '3 of hearts',
  },
  {
    cardIndex: 2,
    hasMatched: false,
    image: 'images/svg-cards/4_of_hearts.svg',
    isFlipped: false,
    name: '4 of hearts',
  },
  {
    cardIndex: 0,
    hasMatched: false,
    image: 'images/svg-cards/2_of_hearts.svg',
    isFlipped: false,
    name: '2 of hearts',
  },
  {
    cardIndex: 1,
    hasMatched: false,
    image: 'images/svg-cards/3_of_hearts.svg',
    isFlipped: false,
    name: '3 of hearts',
  },
  {
    cardIndex: 2,
    hasMatched: false,
    image: 'images/svg-cards/4_of_hearts.svg',
    isFlipped: false,
    name: '4 of hearts',
  },
];

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
    const tree = shallow(<Component {...mockProps}><MockSimpleChild /></Component>);
    expect(tree.length).toEqual(1);
  });

  // test(`Renders correctly`, () => {
  //   const main = mount(<Component {...mockProps} />);
  //   expect(main.debug()).toMatchSnapshot();
  // });
});