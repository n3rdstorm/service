import React from 'react';

class Size extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      sizeHover: false
    };
    this.hoverSize=this.hoverSize.bind(this);
  }
  hoverSize() {
    this.setState({sizeHover: !this.state.sizeHover})
    console.log('hey')
  }

  render() {
    if (this.state.sizeHover) {
      return (
        <li className='sizeHover' onMouseLeave={this.hoverSize}>{this.props.size}</li>
      )
    } else {
      return (
        <li className='size-li' onMouseEnter={this.hoverSize}>{this.props.size}</li>
      )
    }
  }
}

export default Size;