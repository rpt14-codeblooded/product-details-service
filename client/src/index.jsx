import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductDetailsComponent from './components/ProductDetailsComponent.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    // here is where I would bind my methods using 'this'
  }
  componentDidMount() {
    const homePath = window.location.pathname;
    const regex = /[0-9]/g;
    const currentPath = homePath.match(regex);
    if (currentPath) {
      const id = Number(currentPath.join(''));
      if (id >= 0 && id <= 100) {
      axios.get(`/api/productdetails/${id}`)
      .then((results) => {
        this.setState(results.data, () => {
        })
      })
      .catch(err => console.log(err))
      }
    }
  }

  render () {
    return (
      <div>
        <h1>Service Oriented Application SOA - Front-End Capstone</h1>
        <ProductDetailsComponent prodDeets={this.state}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));