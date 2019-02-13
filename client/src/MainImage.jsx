import React from 'react';

class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      currentImage: props.mainImage
    };

    this.handleClick=this.handleClick.bind(this);
  }


  handleClick(event) {
    event.preventDefault();
    console.log(event.target.value, 'THIS IS AN EVENT')
    this.setState({currentImage: event.target.value})
  }


  render() {
    return (
      <span>
        <img src={this.state.currentImage} onClick={this.handleClick} id='mainImage' />
      </span>
    )
  }
}

export default MainImage;