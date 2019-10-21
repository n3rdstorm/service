import React from 'react';
import Sizes from './Sizes.jsx';

const svgButtonArrow = {
  focusable: 'false',
  width: '12px',
  height: '7px',
  color: 'black'
}

const pathButtonArrow = {
  d: 'path("M6.002 6L1 1m5.002 5L11 1.002")',
  stroke: '#737373'
}

class Fit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSizesOpen: false,
      size: 'Size'
    };
    this.handleSize = this.handleSize.bind(this);
    this.changeSize = this.changeSize.bind(this);
  }

  handleSize() {
    this.setState({
      isSizesOpen: !this.state.isSizesOpen
    });
  }

  changeSize(size) {
    this.setState({
    size: size,
    isSizesOpen: !this.state.isSizesOpen
    })
  }

  render() {
    return (
      <div className='fit-size-container'>
        <div className='fit'>
          <span className='fit-text'>Fit</span>
          <span className='fit-tip'>{this.props.fit.fit}True to size.</span>
        </div>
        <button className='size-button' onClick={this.handleSize}> {this.state.size}
          <div className='size-value'>
            {this.state.chosenSize}
            <span className='arrow-span'>
              <svg className='button-arrow' style={svgButtonArrow}>
                <path style={pathButtonArrow}></path>
              </svg>
            </span>
          </div>
        </button>
        <aside className='size-guide'>
          <span className='size-guide-span'>Size guides</span>
        </aside>
        <Sizes sizes={this.props.fit} open={this.state.isSizesOpen} close={this.handleSize} changeSize={this.changeSize} />
      </div>
    )
  }
}

export default Fit;

