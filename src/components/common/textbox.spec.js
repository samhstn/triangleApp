import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import TextBox from './textbox.js';

describe('textbox', () => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<TextBox name='name' borderColor='red' left='left' top='top' />);
  it('should be type input', () => {
    const actual = renderer.getRenderOutput().type;
    const expected = 'input';
    expect(actual).toEqual(expected);
  });
  it('should render 4 prop', () => {
    const obj = renderer.getRenderOutput().props;
    const { name, style } = obj;
    const expected = [name, style.border, style.left, style.top];
    const actual = ['name', '2px solid red', 'left', 'top'];
    expect(actual).toEqual(expected);
  });
});

