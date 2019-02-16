import React from 'react';
import Image from './Image.jsx';
import MainImage from './MainImage.jsx';
import Description from './Description.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className ='imageSection'>
        <ul id = 'mainDiv'>
          {this.props.images.map((image, i) => 
            <Image image = {image} key = {i} />
            )}
        </ul>
        <MainImage mainImage = {this.props.images[0]} />
      </div>
    )
  }
} 

export default Gallery;