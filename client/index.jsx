import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Gallery from './src/Gallery.jsx';
import RightSideComponent from './src/RightSideComponent.jsx';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ['https://n3rdstorm-photos.s3-us-west-2.amazonaws.com/tiger-front.jpeg','https://n3rdstorm-photos.s3-us-west-2.amazonaws.com/tiger-back.jpeg','https://n3rdstorm-photos.s3-us-west-2.amazonaws.com/tiger-full.jpeg'],
      itemName: 'Tiger Wool Blend Sweater',
      brand: 'GUCCI',
      price: '$1500.00',
      description: 'Wild style is refined for the contemporary gent on an intricate jacquard-knit wool-blend sweater featuring a bold, fierce tiger face in front.',
      fit: 'True to size.',
      size: ['Small', 'Medium', 'Large', 'X-Large','XX-Large'],
      color: [{color: 'Black Gold', icon: 'https://n3rdstorm-photos.s3-us-west-2.amazonaws.com/tiger-swatch.jpeg'}],
      quantity: 1
    };
  }
 
  componentDidMount() {
    let id = window.location.pathname.slice(1) || 0;
    $.ajax({
      type: 'GET',
      url:`/products/${id}`,
      success: (data) => {
        this.setState({
          images: data.images,
          itemName: data.product_name,
          brand: data.brand,
          price: '$' + data.price.toFixed(2),
          description: data.description,
          fit: data.fit,
          size: data.size,
          color: data.color,
          quantity: data.quantity
        })
      },
      error: (error) => {
        console.log('Error getting data', error);
      }
    });
  }
 
  render() {
    return (
      <div className='container'>
        <Gallery images={this.state.images} />
        <RightSideComponent data={this.state} /> 
      </div>
    )
  }
}

// ReactDOM.render(<Product />, document.getElementById('product'));
window.Product = Product;