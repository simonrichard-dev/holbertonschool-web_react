// src/App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  // Test to verify that App renders without crashing
  it('renders App without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test to verify that App renders a div with the class App-header
  it('renders App header', () => {
    const header = wrapper.find('.App-header');
    expect(header.exists()).toBe(true);
  });

  // Test to verify that App renders a div with the class App-body
  it('renders App body', () => {
    const body = wrapper.find('.App-body');
    expect(body.exists()).toBe(true);
  });

  // Test to verify that App renders a div with the class App-footer
  it('renders App footer', () => {
    const footer = wrapper.find('.App-footer');
    expect(footer.exists()).toBe(true);
  });
});
