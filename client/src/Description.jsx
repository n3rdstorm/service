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
        <h2>{this.props.description.brand}</h2>
        <section>
          <span>{this.props.description.price}</span>
          <span>Free Shipping</span>
        </section>
        <div>{this.props.description.description}</div>
      </div>
    )
  }
}



export default Description;