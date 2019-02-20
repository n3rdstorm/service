import React from 'react';

class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className = 'colors'>
          <div id = 'colorIconBorder'>
            <img id = 'colorIcon' src = {this.props.colors.color[0].icon} />
          </div>
          <span className = 'colorName'>{this.props.colors.color[0].color}</span>
        </div>
    )
  }
}

export default Colors;