import React, { PropTypes } from 'react';
import Text from './text.js';

const Corner = ({textLeft, textTop, name, left, top, color}) => (
  <div>
    <Text text='Corner' textLeft={textLeft} textTop={textTop} />
    <div name={name}
      style={{
        zIndex: '1',
        position: 'absolute',
        left: left,
        top: top,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: color
      }}
    ></div>
  </div>
);

Corner.propTypes = {
  textLeft: PropTypes.string.isRequired,
  textTop: PropTypes.string.isRequired,
  name: PropTypes.string,
  left: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  color: PropTypes.string
};

Corner.defaultProps = {
  name: 'bottomRightCorner',
  color: 'red'
}

export default Corner;
