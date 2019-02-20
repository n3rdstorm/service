import React from 'react';

const xMark = {
  d: 'path("M7 7l10 10m0-10L7 17")'
}

class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      currentImage: props.mainImage,
      zoom: false
    };
    this.zoomIn = this.zoomIn.bind(this);
  }

  zoomIn() {
    console.log('zoom');
    this.setState({zoom: !this.state.zoom})
  }

  render() {
    if (this.state.zoom) {
      return (
        <div className = 'zoomInWrapper' onClick={this.zoomIn}>
          <img src={this.state.currentImage} className ='zoomMainImage'/>
          <div className ='exit'>
            <svg focusable="false" height="24" width="24" class='exitIconPosition'>
              <g>
                <circle class='circle' cx="12" cy="12" r="11"></circle>
              <path class='x' style={xMark}></path>
              </g>
            </svg>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className='mainImageContainer'>
            {/* <div id='mainImage' > */}
              <img src={this.state.currentImage} id='mainImage' onClick={this.zoomIn}/>
            {/* </div> */}
          </div>
          {/* <div className = 'zoom'>
          </div> */}
        </div>
      )
    }
  }
}

export default MainImage;