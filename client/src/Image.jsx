import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      currentImage: this.props.image
    };
    this.handleClick=this.handleClick.bind(this);

  }

  handleClick(event) {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({currentImage: event.target.value})
  }

  render() {
    return(
    <div>
      <img src={this.props.image} className="galleryImage" onClick={this.handleClick} />
          {/* <button type='button' id ='modalButton'>X</button> */}
    </div>
    )
  }
}

export default Image;