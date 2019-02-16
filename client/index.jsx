import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Gallery from './src/Gallery.jsx';
import Description from './src/Description.jsx';
import Size from './src/Size.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ['https://n.nordstrommedia.com/id/9d02dff4-567e-4b1f-b334-f4dc6c3eed2d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/2ba85b44-1644-48fe-ba86-5744fa25bc06.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65', 'https://n.nordstrommedia.com/id/20ec64e1-e350-4d73-9294-ae19cd0ffb09.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=1.5&quality=65'],
      itemName: 'Tiger Wool Blend Sweater',
      brand: 'GUCCI',
      price: 1500.00,
      description: 'Wild style is refined for the contemporary gent on an intricate jacquard-knit wool-blend sweater featuring a bold, fierce tiger face in front.',
      fit: 'True to size.',
      size: ['Small', 'Medium', 'Large', 'X-Large','XX-Large'],
      color: ['Black Gold'],
      // isModalOpen: false,
    };
  }
  // changeCurrentImage() {

  // }
  // openModal() {
  //   this.setState=({isModalOpen: true})
  // }

  // closeModal() {
  //   this.setState=({isModalOpen: false})
  // }

  componentDidMount() {
    let id = window.location.pathname.split('/');
    id = id[id.length-1];

    $.ajax({
      method: 'GET',
      url: `products/:product_id/item/${id}`,
      dataType: 'json',
      suceess: (data) => {
        // this.setState({images: data.images})
        console.log(data)
      },
      error: (error) => {
        console.log('Error getting data', error);
      }
    })
  }
 
  render() {
    return (
      <div className='topSection'>
        <Gallery images = {this.state.images} />
        <Description description = {this.state} />
        <Size size = {this.state} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));