import React, { PropTypes } from 'react';
import EdgeCover from '../common/edgecover.js';

const Edges = () => (
  <div>
    <EdgeCover name='topLeft' left='205px' top='176px' angle='30deg' textLeft='80px' textTop='170px' />
    <EdgeCover name='topRight' left='290px' top='176px' angle='150deg' textLeft='380px' textTop='170px' />
    <EdgeCover name='topRight' left='250px' top='264px' angle='90deg' textLeft='240px' textTop='440px' />
  </div>
);

Edges.propTypes = {
  handleLeftClick: PropTypes.func,
  handleRightClick: PropTypes.func,
  handleBottomClick: PropTypes.func
};

export default Edges;

// {handleLeftClick, handleRightClick, handleBottomClick}
