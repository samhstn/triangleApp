import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {
  render () {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Triangle App</h1>
        <h3 style={{textAlign: 'center', margin: '5% 0'}}>Choose your Triangle</h3>
        <Link to='/equilateral'>
          <img src='../../assets/equilateralTriangle.png'
            style={styles}
          />
        </Link>
        <Link to='/rightAngle'>
          <img src='../../assets/rightAngledTriangle.png'
            style={styles}
          />
        </Link>
        <Link to='/obtuse'>
          <img src='../../assets/obtuseTriangle.png'
            style={styles}
          />
        </Link>
      </div>
    )
  }
}

const styles = {
  margin: '3% 5%'
};
