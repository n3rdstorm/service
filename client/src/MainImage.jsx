import React from 'react';

class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      currentImage: props.mainImage,
      zoom: true;
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
        <div className='mainImageContainer'>
          {/* <div id='mainImage' > */}
            <img src={this.state.currentImage} id='mainImage'/>
          {/* </div> */}
        </div>
        {/* <div className = 'zoom'>
        </div> */}
      </div>
    )
  }
}

export default MainImage;