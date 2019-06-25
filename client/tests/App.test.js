import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/index.jsx';

describe('Make sure App component loads', () => {
  it('Render App without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div)
  });
})