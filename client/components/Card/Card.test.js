import React from 'react';
import { shallow } from 'enzyme';
import { Card as Component } from './index';

const mockCard = {
  cardIndex: 0,
  hasMatched: false,
  image: 'images/svg-cards/3_of_hearts.svg',
  isFlipped: false,
  name: '3 of hearts',
};

describe('<Card />', () => {
  test('It doesn\'t blow up' , () => {
    const tree = shallow(<Component />);
    expect(tree.length).toEqual(1);
  });

  const mockOnClick = jest.fn();
  const props = {
    card: mockCard,
    onClick: mockOnClick,
  };

  test('Renders correctly unflipped', () => {
    const card = shallow(<Component {...props} />);
    expect(card.debug()).toMatchSnapshot();
  });

  test('Click is triggered', () => {
    const card = shallow(<Component {...props}  />);
    expect(mockOnClick).not.toHaveBeenCalled();
    card.find('.card__wrapper').simulate('click');
    expect(mockOnClick).toHaveBeenCalled();
    card.find('.card__wrapper').simulate('click');
    expect(mockOnClick).toHaveBeenCalledTimes(2);
  });
});