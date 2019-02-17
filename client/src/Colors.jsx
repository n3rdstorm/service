import React from 'react';

class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className = 'color'>
          <div id = 'colorIconBorder'>
            <img id = 'colorIcon' src = {this.props.colors.color[0].icon} />
          </div>
        </div>
    )
  }
}

export default Colors;