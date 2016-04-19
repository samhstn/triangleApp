import React, { Component, PropTypes } from 'react'

export default class Index extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

Index.propTypes = {
  children: PropTypes.node
}
