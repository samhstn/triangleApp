import React, { Component } from 'react'

export default class EdgeCover extends Component {
  render () {
    return (
      <div>
        <div style={{
          zIndex: '1',
          position: 'absolute',
          left: this.props.textLeft,
          top: this.props.textTop,
          width: '30px',
          height: '20px'
        }}>Side Length 
        </div>
        <div name={this.props.name}
          style={{
            zIndex: '1',
            position: 'absolute',
            left: this.props.left,
            top: this.props.top,
            width: '20px',
            height: '150px',
            backgroundColor: 'orange',
            transform: 'rotate(' + this.props.angle + ')'
          }}
        ></div>
      </div>
    )
  }
}

