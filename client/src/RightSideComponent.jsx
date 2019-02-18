import React from 'react';
import Description from './Description.jsx';
import Size from './Size.jsx';
import Colors from './Colors.jsx';
import AddToBag from './AddToBag.jsx';

const RightSideComponent = (props) => (
  <div className = 'rightSideComponent'>
    <Description description = {props.data} />
    <Size size = {props.data} />
    <Colors colors = {props.data} />
    <AddToBag quantity = {props.data.quantity} />
  </div>
);

export default RightSideComponent;
