import React, { Component } from 'react'

export default class EdgeCover extends Component {
  render () {
    return (
      <div name={this.props.name}
        style={{
          zIndex: '1',
          position: 'absolute',
          left: this.props.left,
          top: this.props.top,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'purple',
          visibility: this.props.visibility
        }}
      ></div>
    )
  }
}
