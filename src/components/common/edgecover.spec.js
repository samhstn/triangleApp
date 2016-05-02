import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import EdgeCover from './edgecover.js';

describe('edgecover', () => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<EdgeCover name='name' textLeft='textLeft' textTop='textTop' top='top' left='left' angle='90' />);
  it('should have children of type div', () => {
    const obj = renderer.getRenderOutput().props.children;
    const actual = obj.map(el => el.type);
    const expected = ['div', 'div'];
    expect(actual).toEqual(expected);
  });
  it('should exactly render a div with 4 props', () => {
    const obj = renderer.getRenderOutput().props;
    const { left: textLeft, top: textTop } = obj.children[0].props.style;
    const { name, style } = obj.children[1].props;
    const actual = [ name, style.top, style.left, textLeft, textTop ];
    const expected = ['name', 'top', 'left', 'textLeft', 'textTop'];
    expect(actual).toEqual(expected);
  });
});

