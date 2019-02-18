import React from 'react';

class GalleryImage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      currentImage: this.props.mainImage,
      hover: false

    };
    this.hoverImage = this.hoverImage.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }
  hoverImage() {
    this.setState({hover: !this.state.hover})
  }
  changeImage(event) {
    event.preventDefault();
    console.log(event.target)
    this.setState({currentImage: this.props.image})
  }

  render() {
    if (this.state.hover) {
      return (
        <li className="gallery-li-hover">
          <img src={this.props.image} className="galleryImageSize" onMouseLeave={this.hoverImage} onClick={this.changeImage} />
        </li>
      )
    } else {
      return (
        <li className="gallery-li">
          <img src={this.props.image} className="galleryImageSize" onMouseEnter={this.hoverImage} />
        </li>
      )
    }
    <MainImage mainImage = {this.props.image} />
  }
}

export default GalleryImage;