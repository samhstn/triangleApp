import React, { Component } from 'react'
import { Link } from 'react-router'
import Button from './common/button.js'
import TextBox from './common/textbox.js'
import EdgeCover from './common/edgecover.js'

export default class Equilateral extends Component {
  render () {
    return (
      <div>
        <h1>Equilateral page</h1>
        <Link to='/'><h3>Back to Home</h3></Link>
        <div className='triangleContainer'>
          <TextBox name='bottomLeftCorner' borderColor='blue' top='330px' left='90px' />
          <TextBox name='topCorner' borderColor='red' top='110px' left='236px' />
          <TextBox name='bottomRightCorner' borderColor='green' top='330px' left='380px' />
          <TextBox name='leftEdge' borderColor='purple' top='220px' left='130px' />
          <TextBox name='rightEdge' borderColor='purple' top='220px' left='330px' />
          <TextBox name='bottomEdge' borderColor='purple' top='380px' left='240px' />
          <Button name='top' color='red' left='230px' top='150px' />
          <Button name='left' color='blue' left='140px' top='310px' />
          <Button name='right' color='green' left='320px' top='310px' />
          <EdgeCover name='topLeft' left='196px' top='184px' visibility='visible' />
          <EdgeCover name='topLeft' left='178px' top='222px' visibility='visible' />
          <EdgeCover name='topLeft' left='160px' top='260px' visibility='visible' />
          <EdgeCover name='bottom' left='180px' top='310px' visibility='visible' />
          <EdgeCover name='bottom' left='224px' top='310px' visibility='visible' />
          <EdgeCover name='bottom' left='268px' top='310px' visibility='visible' />
          <EdgeCover name='topRight' left='258px' top='184px' visibility='visible' />
          <EdgeCover name='topRight' left='274px' top='222px' visibility='visible' />
          <EdgeCover name='topRight' left='288px' top='260px' visibility='visible' />
          <img src='../../assets/equilateralTriangle.png'
            style={{
              position: 'absolute',
              left: '116px',
              top: '120px',
              margin: '30px 20px'
            }}
          />
        </div>
      </div>
    )
  }
}
