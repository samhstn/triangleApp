import React, { PropTypes } from 'react'

const EdgeCover = ({ textLeft, textTop, name, left, top, angle }) => (
  <div>
    <div style={{
      ...styles,
      left: textLeft,
      top: textTop,
      width: '30px',
      height: '20px'
    }}>Side Length</div>
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

export default EdgeCover 
