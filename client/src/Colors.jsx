import React from 'react';

class Colors extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='colors'>
        <div className='color-icon-container'>
          <img className='color-icon' src = {this.props.colors.color[0].icon} />
        </div>
        <span className='color-name'>{this.props.colors.color[0].color}</span>
      </div>
    )
  }
}

export default Colors;
