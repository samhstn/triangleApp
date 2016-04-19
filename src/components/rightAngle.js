import React, { Component } from 'react'
import { Link } from 'react-router'

export default class RightAngle extends Component {
  render () {
    return (
      <div>
        <h1>RightAngle page</h1>
        <Link to='/'><h3>Back to Home</h3></Link>
        <div className='triangleContainer'>
          <img src='../../assets/rightAngledTriangle.png' style={{ margin: '3% 5%' }}/>
        </div>
      </div>
    )
  }
}
