import React, { PropTypes } from 'react';
import Text from './text.js';

const EdgeCover = ({ textLeft, textTop, name, left, top, angle }) => (
  <div>
    <Text text='Side' textLeft={textLeft} textTop={textTop} />
    <div name={name}
      style={{
        zIndex: '1',
        position: 'absolute',
        left: left,
        top: top,
        width: '20px',
        height: '150px',
        backgroundColor: 'orange',
        transform: 'rotate(' + angle + ')'
      }}
    ></div>
  </div>
)

EdgeCover.propTypes = {
  textLeft: PropTypes.string.isRequired,
  textTop: PropTypes.string.isRequired,
  name: PropTypes.string,
  left: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  angle: PropTypes.string.isRequired
}

export default EdgeCover 
