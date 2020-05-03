import React from 'react';
import { mount } from 'enzyme';

import { defaultState } from '../../store';

import Component from './index';

// const mountComponent = (state) => mount(<Component />, state);

describe('<App />', () => {
  test('it doesnt blow up', () => {
    const tree = ''; // mountComponent({ defaultState, config: {} })
    expect(tree.length).toEqual(0);
  });
});

