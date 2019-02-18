import React from 'react';
import GalleryImage from './GalleryImage.jsx';
import MainImage from './MainImage.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className ='imageSection'>
        <div className = 'galleryDiv'>
          <ul>
            {this.props.images.map((image, i) => 
              <GalleryImage image = {image} key = {i} />
              )}
          </ul>
        </div>
        <MainImage mainImage = {this.props.images[0]} />
      </div>
    )
  }
} 

export default Gallery;