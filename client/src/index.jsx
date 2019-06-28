import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import TitleComponent from './components/TitleComponent.jsx';
import StarsComponent from './components/StarsComponent.jsx';
import ProductNumberComponent from './components/ProductNumberComponent.jsx';
import PriceComponent from './components/PriceComponent.jsx';
import ItemRemainingComponent from './components/ItemRemainingComponent.jsx';
import ConditionComponent from './components/ConditionComponent.jsx';
import ProductDetailsComponent from './components/ProductDetailsComponent.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
    // here is where I would bind my methods using 'this'
  }
  componentDidMount() {
    axios.get(`/product-details`)
    .then((results) => {
      this.setState({products: results.data}, () => {
      })
    })
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <h1>Service Oriented Application SOA - Front-End Capstone</h1>
        <ProductDetailsComponent prodDeets={this.state.products}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));