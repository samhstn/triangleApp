import React, { Component } from 'react'

export default class TextBox extends Component {
  render () {
    return (
      <input type='text'
        name={this.props.name}
        style={{
          zIndex: '10',
          border: '2px solid ' + this.props.borderColor,
          position: 'absolute',
          left: this.props.left,
          top: this.props.top,
          width: '30px',
          height: '20px'
        }}
      />
    )
  }
}
