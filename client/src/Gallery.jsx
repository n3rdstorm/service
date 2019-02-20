import React from 'react';
import GalleryImage from './GalleryImage.jsx';
import MainImage from './MainImage.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage:this.props.images[0]
    };
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(imageSrc) {
    event.preventDefault();
    console.log(imageSrc);
    this.setState({mainImage: imageSrc})
  }


  render() {
    return (
      <div className ='imageSection'>
        <div className = 'galleryDiv'>
          <ul>
            {this.props.images.map((image, i) => 
              <GalleryImage image = {image} key = {i} changeImage={this.changeImage} />
              )}
          </ul>
        </div>
        <MainImage mainImage = {this.state.mainImage} />
      </div>
    )
  }
} 

export default Gallery;