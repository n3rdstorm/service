import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      currentImage: this.props.image,
      hover: false

    };
    this.hoverImage = this.hoverImage.bind(this);
  }
  hoverImage() {
    this.setState({hover: !this.state.hover})
  }
  handleClick(event) {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({currentImage: event.target.value})
  }

  render() {
    if (this.state.hover) {
      return (
        <li className="gallery-li-hover">
          <img src={this.props.image} className="galleryImageSize" onMouseLeave={this.hoverImage} />
        </li>
      )
    } else {
      return (
        <li className="gallery-li">
          <img src={this.props.image} className="galleryImageSize" onMouseEnter={this.hoverImage} />
        </li>
      )
    }
  }
}

export default Image;