import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';

describe('App', () => {
  test('renders correct', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});