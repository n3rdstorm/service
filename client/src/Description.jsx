import React from 'react';

class Description extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='description'>
        <h1 className='item-name'>{this.props.description.itemName}</h1>
        <h2 className='brand'>{this.props.description.brand.toUpperCase()}</h2>
        <section>
          <span>
            <span className='price'>{this.props.description.price}</span>
            <span className='free-shipping'>Free Shipping</span>
          </span>
        </section>
        <div className='description-text'>{this.props.description.description}</div>
      </div>
    )
  }
}

export default Description;
