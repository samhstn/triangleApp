import React, { PropTypes } from 'react'

const Button = ({name, left, top, color}) => (
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

Button.propTypes = {
  name: PropTypes.string,
  left: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  color: PropTypes.string
};

Button.defaultProps = {
  name: 'bottomRightCorner',
  color: 'red'
}

export default Button;
