import React from 'react';

class Size extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      sizeHover: false,
    };
    this.hoverSize = this.hoverSize.bind(this);
  }

  hoverSize() {
    this.setState({sizeHover: !this.state.sizeHover})
  }

  render() {
    if (this.state.sizeHover) {
      return (
        <div className="size-modal-container" onClick={(e) => this.props.changeSize(e.target.innerHTML)}>
          <li className='size-li' onMouseLeave={this.hoverSize}>{this.props.size}</li>
          <span className='size-hover'></span>
        </div>
      )
    } else {
      return (
        <div className="size-modal-container">
          <li className='size-li' onMouseEnter={this.hoverSize}>{this.props.size}</li>
          <span className='no-size-hover'></span>
        </div>
      )
    }
  }
}

export default Size;
