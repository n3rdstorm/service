import React from 'react';

class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      currentImage: props.mainImage
    };

    // this.handleClick=this.handleClick.bind(this);
  }


  // handleClick(event) {
  //   event.preventDefault();
  //   console.log(event.target.value)
  //   this.setState({currentImage: event.target.value})
  // }


  render() {
    return (
      <div>
        <div className='mainImageSize'>
          <img src={this.state.currentImage} id='mainImage' />
        </div>
        <div className = 'zoom'>
        </div>
      </div>
    )
  }
}

export default MainImage;