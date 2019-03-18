import React from 'react'
import { Provider } from 'react-redux'
import { mount as enzymeMount, shallow as enzymeShallow, render as enzymeRender } from 'enzyme'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()

export const shallow = (Component) => enzymeShallow(Component);

export const mount = (Component) => enzymeMount(
  <Provider store={mockStore()}>
    {Component}
  </Provider>
)
export const mountWithStyleRoot = (Component) => enzymeMount(Component)

export const render = (Component) => enzymeRender(Component)
