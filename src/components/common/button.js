import React, { Component } from 'react'

export default class Button extends Component {
  render () {
    return (
      <div name='bottomRightCornerButton'
        style={{
          zIndex: '1',
          position: 'absolute',
          left: this.props.left,
          top: this.props.top,
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: this.props.color
        }}
      ></div>
    )
  }
}
