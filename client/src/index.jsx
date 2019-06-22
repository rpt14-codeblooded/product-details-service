import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    // here is where I would bind my methods using 'this'
  }
  render () {
    return (
      <div>
        <h1>Service Oriented Application SOA - Front-End Capstone</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));