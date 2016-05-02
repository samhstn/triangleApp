import React, { PropTypes } from 'react';

const Text = ({ text, textLeft, textTop }) => (
  <div
    style={{
      position: 'absolute',
      zIndex: '10',
      left: textLeft,
      top: textTop,
      width: '30px',
      height: '20px'
    }}
  >{text}</div>
);

Text.propTypes = {
  text: PropTypes.string,
  textLeft: PropTypes.string.isRequired,
  textTop: PropTypes.string.isRequired
};

Text.defaultProps = {
  text: 'side'
}

export default Text;
