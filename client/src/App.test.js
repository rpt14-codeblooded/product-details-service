import React from 'react';
import App from './index';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';


describe('The main App component loads', () => {
  it ('Should render the App component', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  })
})

