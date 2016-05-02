import React, { PropTypes } from 'react'

const TextBox = ({ name, borderColor, left, top }) => (
  <input type='text'
    name={name}
    style={{
      zIndex: '10',
      border: '2px solid ' + borderColor,
      position: 'absolute',
      left: left,
      top: top,
      width: '30px',
      height: '20px'
    }}
  />
)

TextBox.propTypes = {
  name: PropTypes.string,
  borderColor: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired
}

TextBox.defaultProps = {
  borderColor: 'red'
}

export default TextBox 
