import { shallow } from 'enzyme';
import React from 'react';
import ApiHandler from '../ApiHandler';

describe('ApiHandler', () => {
  test('renders correct', () => {
    expect(shallow(<ApiHandler />)).toMatchSnapshot();
  });
});