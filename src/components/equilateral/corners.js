import React from 'react';
import Corner from '../common/corner.js';

const Corners = () => (
  <div>
    <Corner name='top' color='red' left='230px' top='150px' textLeft='230px' textTop='70px' />
    <Corner name='left' color='blue' left='140px' top='310px' textLeft='30px' textTop='345px' />
    <Corner name='right' color='green' left='320px' top='310px' textLeft='430px' textTop='345px' />
  </div>
);

export default Corners
