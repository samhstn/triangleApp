import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Obtuse extends Component {
  render () {
    return (
      <div>
        <h1>Obtuse Triangle page</h1>
        <Link to='/'><h3>Back to Home</h3></Link>
        <div className='triangleContainer'>
          <img src='../../assets/obtuseTriangle.png' style={{ margin: '3% 5%' }}/>
        </div>
      </div>
    )
  }
}
