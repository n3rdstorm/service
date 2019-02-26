import React from 'react';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }
  render() {
    return (
      <div className='description'>
        <h1 id='itemName'>{this.props.description.itemName}</h1>
        <h2 id = 'brand'>{this.props.description.brand.toUpperCase()}</h2>
        <section>
          <span>
            <span id = 'price'>{this.props.description.price}</span>
            <span id = 'freeShipping'>Free Shipping</span>
          </span>
        </section>
        <div id = 'descriptionText'>{this.props.description.description}</div>
      </div>
    )
  }
}



export default Description;