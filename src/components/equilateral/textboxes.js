import React, { PropTypes } from 'react';
import TextBox from '../common/textbox.js';

const TextBoxes = () => (
  <div>
    <TextBox name='bottomLeftCorner' borderColor='blue' top='330px' left='90px' />
    <TextBox name='topCorner' borderColor='red' top='110px' left='236px' />
    <TextBox name='bottomRightCorner' borderColor='green' top='330px' left='380px' />
    <TextBox name='leftEdge' borderColor='purple' top='220px' left='130px' />
    <TextBox name='rightEdge' borderColor='purple' top='220px' left='330px' />
    <TextBox name='bottomEdge' borderColor='purple' top='380px' left='240px' />
  </div>
);

TextBoxes.propTypes = {
  handleLeftClick: PropTypes.func,
  handleRightClick: PropTypes.func,
  handleBottomClick: PropTypes.func
};

export default TextBoxes;
