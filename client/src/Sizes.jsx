import React from 'react';
import Size from './Size.jsx';

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

class Sizes extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isSizesOpen: true,
      hover: false
    };
    this.handleSizeModal = this.handleSizeModal.bind(this);
  }


  handleSizeModal() {
    console.log('OPEN MODAL');
    this.setState=({isSizesOpen: !this.state.isSizesOpen})
  }

  render() {
    // if (this.isSizesOpen) {
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
    // } else {
    //   return (
    //     <div className = 'sizeClosed'>
    //       <div className = 'fit'>
    //         <span id = 'fitText'>Fit</span>
    //         <span id = 'fitTip'>{this.props.size.fit}</span>
    //       </div>
    //       <div className ='sizeDropdown'>
    //         <button id='sizeButton' onClick={this.handleSizeModal}>
    //           <div className = 'sizeValue'>
    //             Size
    //             <span id = 'arrowSpan'>
    //               <svg id='buttonArrow' style={svgButtonArrow} >
    //                 <path style={pathButtonArrow}></path>
    //               </svg>
    //             </span>
    //           </div>
    //         </button>
    //       </div>
    //     </div>
    //   )
    // }
  }
}
export default Sizes;