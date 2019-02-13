import React from 'react';
import Image from './Image.jsx'

const Gallery = (props) => {
  return (
    <div>
      {props.images.map((image, i) => 
        <Image image = {image} key = {i} />
        )}
    </div>
  )
}

export default Gallery;