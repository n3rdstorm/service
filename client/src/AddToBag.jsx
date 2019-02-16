import React from 'react';

class AddToBag extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }
  handleQuantityChange() {
    this.setState({quantity: this.state.quantity})
  }
  render() {
    return (
      <div className = 'addToBagComponentDiv'>
        <div className = 'quantity'>
          <input id = 'quantityField' type='text' placeholder='1'/>
        </div>
        <div className = 'addToBagButtonDiv'>
          <button className = 'addToBagButton'>Add to Bag</button>
        </div>
        <div clasName = 'wishListDiv'>
          <span id = 'wishListText'>Add to Wish List</span>
        </div>
        <p>Buy & Pick Up</p>
        <p>Check availability within 100 miles of:</p>
        <input id = 'zipCode' type='text' placeholder = 'Zip code'/>
        <button id = 'checkLocation'>Check Location</button>
      </div>
    )
  }
}

export default AddToBag;