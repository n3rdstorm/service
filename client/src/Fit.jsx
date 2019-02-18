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

const Fit = (props) => {
  return (
    <div>
      <div className = 'fit'>
        <span id = 'fitText'>Fit</span>
        <span id = 'fitTip'>{props.fit.fit}</span> {/*what is props.fit */}
      </div>
      <button id='sizeButton'>
        <div className = 'sizeValue'>
          Size
          <span id = 'arrowSpan'>
            <svg id='buttonArrow' style={svgButtonArrow} >
              <path style={pathButtonArrow}></path>
            </svg>
          </span>
        </div>
      </button>
    </div>
  )
}

export default Fit;