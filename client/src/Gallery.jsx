import React from 'react';
import GalleryImage from './GalleryImage.jsx';
import MainImage from './MainImage.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: this.props.images[0]
    };
    this.changeImage = this.changeImage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      mainImage: nextProps.images[0]
    })
  }

  changeImage(imageSrc) {
    this.setState({mainImage: imageSrc})
  }

  render() {
    return (
      <div className='image-container'>
        <div className='gallery-container'>
          <ul>
            {this.props.images.map((image, i) => 
              <GalleryImage image={image} key={i} changeImage={this.changeImage} />
            )}
          </ul>
        </div>
        <MainImage mainImage={this.state.mainImage} />
      </div>
    )
  }
} 

export default Gallery;
