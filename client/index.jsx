import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Componenet {
  constructor(props) {
    super(props);
    // this
  }

  getData() {
    $.ajax({
      method: 'GET',
      url: '/products',
      contentType: 'application/json',
      suceess: (data) => {
        console.log(data)
      },
      error: (error) => {
        console.log(error)
      }
    })
  } 

  render() {
    return (
      <div>
        Helloooooooo
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));