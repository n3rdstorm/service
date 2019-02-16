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
      <div className = 'quantity'>
        <input id = 'quantityField' type='text' placeholder='1'/>
      </div>
    )
  }
}

export default AddToBag;