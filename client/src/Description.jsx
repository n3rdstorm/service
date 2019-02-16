import React from 'react';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }
  render() {
    return (
      <div className='descriptionSection'>
        <h1 id='itemName'>{this.props.description.itemName}</h1>
        <h2>{this.props.description.brand}</h2>
        <section>
          <span>
            <span id = 'price'>{this.props.description.price}</span>
            <span id = 'freeShipping'>Free Shipping</span>
          </span>
        </section>
        <div id = 'description'>{this.props.description.description}</div>
        <div className = 'color'>
          <div id = 'colorIcon'>{this.props.description.color.icon}</div>
        </div>
      </div>
    )
  }
}



export default Description;