import React from 'react';

const xMark = {
  d: 'path("M7 7l10 10m0-10L7 17")'
}

class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      zoom: false
    };
    this.zoomIn = this.zoomIn.bind(this);
  }

  zoomIn() {
    this.setState({zoom: !this.state.zoom})
  }

  render() {
    if (this.state.zoom) {
      return (
        <div className = 'zoomInWrapper' onClick={this.zoomIn}>
          <img src={this.props.mainImage} className ='zoomMainImage'/>
          <div className ='exit'>
            <svg focusable="false" height="24" width="24" className='exitIconPosition'>
              <g>
                <circle className='circle' cx="12" cy="12" r="11"></circle>
              <path className='x' style={xMark}></path>
              </g>
            </svg>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className='mainImageContainer'>
              <img src={this.props.mainImage} id='mainImage' onClick={this.zoomIn}/>
          </div>
        </div>
      )
    }
  }
}

export default MainImage;