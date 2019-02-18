import React from 'react';

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

class Size extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isModalOpen: false,
      hover: false
    };
    this.handleSizeModal = this.handleSizeModal.bind(this);
  }


  handleSizeModal() {
    console.log('OPEN MODAL');
    this.setState=({isModalOpen: !this.state.isModalOpen})
  }

  render() {
    return (
      <div className = 'sizeSection'>
        <div className = 'fit'>
          <span id = 'fitText'>Fit</span>
          <span id = 'fitTip'>{this.props.size.fit}</span>
        </div>
        <div className ='sizeDropdown'>
          <button id='sizeButton' onClick={this.handleSizeModal}>
            <div className = 'sizeValue'>
              Size
              <span id = 'arrowSpan'>
                <svg id='buttonArrow' style={svgButtonArrow} >
                  <path style={pathButtonArrow}></path>
                </svg>
              </span>
            </div>
          </button>
          <div>
            <span className = 'sizeTextWhenOpen'>
              <ul className = 'sizeOptionsMenu'>
                <li className = 'optionListItem'>{this.props.size.size[0]}</li>
                <li className = 'optionListItem'>{this.props.size.size[1]}</li>
                <li className = 'optionListItem'>{this.props.size.size[2]}</li>
                <li className = 'optionListItem'>{this.props.size.size[3]}</li>
                <li className = 'optionListItem'>{this.props.size.size[4]}</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Size;