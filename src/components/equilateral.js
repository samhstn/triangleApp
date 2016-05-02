import React, { Component } from 'react'
import { Link } from 'react-router'
import Corner from './common/corner.js'
import TextBox from './common/textbox.js'
import EdgeCover from './common/edgecover.js'
require('../../public/style.css')

export default class Equilateral extends Component {
  render () {
    return (
      <div>
        <h1>Equilateral page</h1>
        <Link to='/'><h3>Back to Home</h3></Link>
        <div className='triangleContainer'>
          <EdgeCover name='topLeft' left='205px' top='176px' angle='30deg' textLeft='80px' textTop='170px' />
          <EdgeCover name='topRight' left='290px' top='176px' angle='150deg' textLeft='380px' textTop='170px' />
          <EdgeCover name='topRight' left='250px' top='264px' angle='90deg' textLeft='240px' textTop='440px' />
          <TextBox name='bottomLeftCorner' borderColor='blue' top='330px' left='90px' />
          <TextBox name='topCorner' borderColor='red' top='110px' left='236px' />
          <TextBox name='bottomRightCorner' borderColor='green' top='330px' left='380px' />
          <TextBox name='leftEdge' borderColor='purple' top='220px' left='130px' />
          <TextBox name='rightEdge' borderColor='purple' top='220px' left='330px' />
          <TextBox name='bottomEdge' borderColor='purple' top='380px' left='240px' />
          <Corner name='top' color='red' left='230px' top='150px' textLeft='230px' textTop='70px' />
          <Corner name='left' color='blue' left='140px' top='310px' textLeft='30px' textTop='345px' />
          <Corner name='right' color='green' left='320px' top='310px' textLeft='430px' textTop='345px' />
          <img src='../../assets/equilateralTriangle.png'
            style={ styles }
          />
        </div>
      </div>
    )
  }
}

const styles={
  position: 'absolute',
  left: '116px',
  top: '120px',
  margin: '30px 20px'
}

