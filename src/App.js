import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
        /* This allows all pages to route from my-app */
        <BrowserRouter basename="/my-app">
          <div className="App">
            <Blog />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
