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
      isSizesOpen: false
    };
    this.handleSize = this.handleSize.bind(this);
  }

  handleSize() {
    this.setState({
      isSizesOpen: !this.state.isSizesOpen
    });
  }

  render() {
    return (
      <div className = 'mainFitDiv'>
        <div className = 'fit'>
          <span id = 'fitText'>Fit</span>
          <span id = 'fitTip'>{this.props.fit.fit}</span>
        </div>
        <button id='sizeButton' onClick={this.handleSize}>
          <div className = 'sizeValue'>
            Size
            <span id = 'arrowSpan'>
              <svg id='buttonArrow' style={svgButtonArrow} >
                <path style={pathButtonArrow}></path>
              </svg>
            </span>
          </div>
        </button>
        <aside className = 'sizeGuide'>
          <span className ='sizeGuideSpan'>Size guides</span>
        </aside>
        <Sizes sizes = {this.props.fit} open={this.state.isSizesOpen}/>
      </div>
    )
  }
}

export default Fit;