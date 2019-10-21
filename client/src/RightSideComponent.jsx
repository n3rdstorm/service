import React from 'react';
import Description from './Description.jsx';
import Fit from './Fit.jsx';
import Colors from './Colors.jsx';
import AddToBag from './AddToBag.jsx';

const RightSideComponent = (props) => (
  <div className='right-side-component'>
    <Description description={props.data} />
    <Fit fit={props.data} />
    <Colors colors={props.data} />
    <AddToBag quantity={props.data.quantity} />
  </div>
);

export default RightSideComponent;
