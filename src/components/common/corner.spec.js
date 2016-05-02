import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Corner from './corner.js';

describe('corner', () => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Corner name='name' left='left' top='top' color='red' />);
  it('should be of type div', () => {
    const actual = renderer.getRenderOutput().type;
    const expected = 'div';
    expect(actual).toEqual(expected);
  });
  it('should exactly render a div with 4 props', () => {
    const obj = renderer.getRenderOutput().props;
    const { name, style } = obj;
    const actual = [name, style.top, style.left, style.backgroundColor];
    const expected = ['name', 'top', 'left', 'red'];
    expect(actual).toEqual(expected);
  });
});

