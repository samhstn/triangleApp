import React, { PropTypes } from 'react'

const EdgeCover = ({ textLeft, textTop, name, left, top, angle }) => (
  <div>
    <div style={{
      ...styles,
      left: textLeft,
      top: textTop,
      width: '30px',
      height: '20px'
    }}>Side</div>
    <div name={name}
      style={{
        ...styles,
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

const styles = {
  zIndex: '1',
  position: 'absolute'
}

EdgeCover.propTypes = {
  textLeft: PropTypes.string.isRequired,
  textTop: PropTypes.string.isRequired,
  name: PropTypes.string,
  left: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  angle: PropTypes.string.isRequired
}

export default EdgeCover 
