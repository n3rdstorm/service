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
        <div className="eachSizeDiv">
          <li className='eachSize' onMouseLeave={this.hoverSize}>{this.props.size}</li>
          <span className='sizeHover'></span>
        </div>
      )
    } else {
      return (
        <div className="eachSizeDiv">
        {/* <div>
          <span>Size guides</span>
        </div> */}
          <li className='eachSize' onMouseEnter={this.hoverSize}>{this.props.size}</li>
          <span className='noSizeHover'></span>
        </div>
      )
    }
  }
}

export default Size;