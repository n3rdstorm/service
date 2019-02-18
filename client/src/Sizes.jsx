import React from 'react';
import Size from './Size.jsx';

const Sizes = (props) => {
  if (props.open) {
    return (
      <div className = 'sizesOpen'>
        <div className = 'sizesOpenHeaderWrapper'>
          <span className = 'sizesOpenHeaderTitle'>Choose a size</span>
          <span className = 'sizeTextWhenOpen'>True to size. Considered a Slim fit; fitted through the chest, armholes and sides.</span>
        </div>
        <ul className = 'sizeOptionsMenu'>
          {props.sizes.size.map((size, i) => 
            <Size size={size} key={i} />
          )}
        </ul>
      </div>
    );
  } else {
    return (
      <div className = 'sizesClosed'>
        <div className = 'sizesOpenHeaderWrapper' onClick={(e) => {props.close(e)}}>
          <span className = 'sizesOpenHeaderTitle'>Choose a size</span>
          <span className = 'sizeTextWhenOpen'>True to size. Considered a Slim fit; fitted through the chest, armholes and sides.</span>
        </div>
        <ul className = 'sizeOptionsMenu'>
          {props.sizes.size.map((size, i) => 
            <Size size={size} key={i} />
          )}
        </ul>
      </div>
    );
  }
};

export default Sizes;