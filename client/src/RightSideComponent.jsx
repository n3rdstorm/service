import React from 'react';
import Description from './Description.jsx';
import Sizes from './Sizes.jsx';
import Colors from './Colors.jsx';
import AddToBag from './AddToBag.jsx';

const RightSideComponent = (props) => (
  <div className = 'rightSideComponent'>
    <Description description = {props.data} />
    <Sizes sizes = {props.data} />
    <Colors colors = {props.data} />
    <AddToBag quantity = {props.data.quantity} />
  </div>
);

export default RightSideComponent;
