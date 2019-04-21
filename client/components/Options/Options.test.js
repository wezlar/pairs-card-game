import React from 'react'
import { shallow } from 'enzyme'
import { Options as Component } from './index';

describe(`<Card />`, () => {
  test(`It doesn't blow up`, () => {
    const tree = shallow(<Component />);
    expect(tree.length).toEqual(1);
  });

  const mockOnClick = jest.fn();
  const props = {
    isGameComplete: false,
    score: 10,
    startNewGame: mockOnClick,
  };

  test(`Renders normal view correctly`, () => {
    const options = shallow(<Component { ...props } />);
    expect(options.debug()).toMatchSnapshot();
  });

  test(`Renders finish view correctly`, () => {
    const options = shallow(<Component { ...props } isGameComplete={true} />);
    expect(options.debug()).toMatchSnapshot();
  });

  test(`Click is triggered`, () => {
    const options = shallow(<Component { ...props } />);
    expect(mockOnClick).not.toHaveBeenCalled();
    options.find('.start-new-game__button').simulate('click');
    expect(mockOnClick).toHaveBeenCalled();
    options.find('.start-new-game__button').simulate('click');
    expect(mockOnClick).toHaveBeenCalledTimes(2);
  });

  test(`Check display values match`, () => {
    const options = shallow(<Component { ...props } />);
    expect(options.find('.score-value').text()).toBe('10');
    options.setProps({ score: 20 });
    expect(options.find('.score-value').text()).toBe('20');
  });
})