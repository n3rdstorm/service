import React from 'react';

class Size extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isModalOpen: false
    };
    this.handleSizeModal = this.handleSizeModal.bind(this);
  }


  handleSizeModal() {
    console.log('OPEN MODAL');
    this.setState=({isModalOpen: !this.state.isModalOpen})
  }

  render() {
    return (
      <div className = 'sizeSection'>
        <div className = 'fit'>
          <span>Fit</span>
          <span>{this.props.size.fit}</span>
        </div>
        <div className ='sizeDropdown'>
          <button onClick={this.openModal}>Size</button>
          <div>
            <span className = 'sizeList'>
              <ul className = 'sizeOptions'>
                <li>{this.props.size.size[0]}</li>
                <li>{this.props.size.size[1]}</li>
                <li>{this.props.size.size[2]}</li>
                <li>{this.props.size.size[3]}</li>
                <li>{this.props.size.size[4]}</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Size;