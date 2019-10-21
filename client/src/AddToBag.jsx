import React from 'react';

class AddToBag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='addToBag-container'>
        <div className='quantity'>
          <input className='quantity-input' type='text' placeholder='1'/>
        </div>
        <div className='addToBag-button-container'>
          <button className='addToBag-button'>Add to Bag</button>
        </div>
        <div>
          <span className='wishlist-text'>Add to Wish List</span>
        </div>
        <div className='buyPickUp-container'>
          <p className='buyPickUp-p'>Buy & Pick Up</p>
          <p className='checkAvail-p'>Check availability within 100 miles of:</p>
          <div className='location-container'>
            <input className='zipCode' type='text' placeholder = 'Zip code'/>
            <button className='checkLocation'>Check Location</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddToBag;
