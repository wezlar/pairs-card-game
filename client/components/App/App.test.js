import React from 'react';
import { mount } from 'enzyme';

import { defaultState } from '../../store';

import Component from './App';

const mountComponent = (state) => mount(<Component />, state);

describe(`<App />`, () => {
  test(`it doesnt blow up`, () => {
    const tree = mountComponent({ defaultState, config: {} })
    console.log(tree.debug())
    expect(tree.length).toEqual(1)
  });
});

