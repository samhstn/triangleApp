import React, { Component } from 'react';
import { Link } from 'react-router';
import Edges from './equilateral/edges.js';
import Corners from './equilateral/corners.js';
import TextBoxes from './equilateral/textboxes.js';
require('../../public/style.css');

export default class Equilateral extends Component {
  render () {
    return (
      <div>
        <h1>Equilateral page</h1>
        <Link to='/'><h3>Back to Home</h3></Link>
        <div className='triangleContainer'>
          <Edges /> 
          <TextBoxes />
          <Corners />
          <img src='../../assets/equilateralTriangle.png'
            style={styles}
          />
        </div>
      </div>
    );
  }
}

const styles={
  position: 'absolute',
  left: '116px',
  top: '120px',
  margin: '30px 20px'
};

