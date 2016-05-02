import React, { PropTypes } from 'react'

const Corner = ({name, left, top, color}) => (
  <div name={ name }
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
);

Corner.propTypes = {
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
