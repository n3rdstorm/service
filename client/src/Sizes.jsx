import React from 'react';
import Size from './Size.jsx';

class Sizes extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isSizesOpen: false
    };
    this.handleSizeModal = this.handleSizeModal.bind(this);
  }

  handleSizeModal() {
    console.log('OPEN MODAL');
    this.setState=({isSizesOpen: !this.state.isSizesOpen})
  }

  render() {
    if (this.state.isSizesOpen) {
      return (
        <div className = 'sizesOpen'>
          <div className = 'sizesOpenHeaderWrapper'>
            <span className = 'sizesOpenHeaderTitle'>Choose a size</span>
            <span className = 'sizeTextWhenOpen'>True to size. Considered a Slim fit; fitted through the chest, armholes and sides.</span>
          </div>
          <ul className = 'sizeOptionsMenu'>
            {this.props.sizes.size.map((size, i) => 
              <Size size={size} key={i} />
            )}
          </ul>
        </div>
      )
    } else if (!this.state.isSizesOpen) {
      return (
        <div className = 'sizesClosed'></div>
      )
    } 
  }
}
export default Sizes;