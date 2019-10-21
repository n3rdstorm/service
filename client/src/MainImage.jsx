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
        <div className='image-zoom-container' onClick={this.zoomIn}>
          <img src={this.props.mainImage} className='zoom-image'/>
          <div className='exit'>
            <svg focusable="false" height="24" width="24" className='exit-icon'>
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
          <div className='main-image-container'>
            <img src={this.props.mainImage} className='main-image' onClick={this.zoomIn}/>
          </div>
        </div>
      )
    }
  }
}

export default MainImage;
