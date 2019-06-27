import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import TitleComponent from './components/TitleComponent.jsx';
import QuantityComponent from './components/QuantityComponent.jsx';
import ProductNumberComponent from './components/TitleComponent.jsx';
import PriceComponent from './components/PriceComponent.jsx';
import ItemRemainingComponent from './components/ItemRemainingComponent.jsx';
import ConditionComponent from './components/ConditionComponent.jsx';


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
        <TitleComponent />
        <QuantityComponent />
        <ProductNumberComponent />
        <PriceComponent />
        <ItemRemainingComponent />
        <ConditionComponent />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));