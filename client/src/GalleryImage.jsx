import React from 'react';

class GalleryImage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      hover: false
    };
    this.hoverImage = this.hoverImage.bind(this);
  }

  hoverImage() {
    this.setState({hover: !this.state.hover})
  }

  render() {
    if (this.state.hover) {
      return (
        <li className="gallery-li-hover">
          <img src={this.props.image} className="gallery-image" onMouseLeave={this.hoverImage} onClick={(event) => {this.props.changeImage(event.target.src)}} />
        </li>
      )
    } else {
      return (
        <li className="gallery-li">
          <img src={this.props.image} className="gallery-image" onMouseEnter={this.hoverImage} />
        </li>
      )
    }
  }
}

export default GalleryImage;
