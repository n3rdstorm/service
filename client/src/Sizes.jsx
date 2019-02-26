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
            <div className = 'sizesOpen'>
              <div className = 'sizesOpenHeaderWrapper' onClick={() => {this.props.close()}}>
                <span className = 'sizesOpenHeaderTitle'>Choose a size</span>
                {/* <span className = 'sizeTextWhenOpen'>True to size. Considered a Slim fit; fitted through the chest, armholes and sides.</span> */}
              </div>
              <ul className = 'sizeOptionsMenu'>
                {this.props.sizes.size.map((size, i) => 
                  <Size size={size} key={i} changeSize={this.props.changeSize}/>
                )}
              </ul>
            </div>
          );
    } else {
      return (
        <div className = 'sizesClosed'>
          <div className = 'sizesOpenHeaderWrapper's>
            <span className = 'sizesOpenHeaderTitle'>Choose a size</span>
            {/* <span className = 'sizeTextWhenOpen'>True to size. Considered a Slim fit; fitted through the chest, armholes and sides.</span> */}
          </div>
          <ul className = 'sizeOptionsMenu'>
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