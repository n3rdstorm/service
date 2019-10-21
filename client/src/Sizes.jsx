import React from 'react';
import Size from './Size.jsx';

class Sizes extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  render() {
    if (this.props.open) {
      return (
        <div className='size-modal-container-open'>
          <div className='size-modal-header-container' onClick={() => {this.props.close()}}>
            <span className='size-title'>Choose a size</span>
          </div>
          <ul className='size-menu'>
            {this.props.sizes.size.map((size, i) => 
              <Size size={size} key={i} changeSize={this.props.changeSize}/>
            )}
          </ul>
        </div>
      );
    } else {
      return (
        <div className='size-modal-container-closed'>
          <div className='size-modal-header-container'>
            <span className='size-title'>Choose a size</span>
            <span className='selected-size'>True to size. Considered a slim fit; fitted through the chest, armholes and sides.</span>
          </div>
          <ul className='size-menu'>
            {this.props.sizes.size.map((size, i) => 
              <Size size={size} key={i} currentSize={this.state.size} isSizesOpen={this.props.open} />
            )}
          </ul>
        </div>
      );
    }
  }
} 

export default Sizes;
