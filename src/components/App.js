import React, { Component } from 'react';

import logo from '../logo.svg';
import '../App.css';


class App extends Component {
  render() {
    return (
      <div className="nav_bar">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand col-xs-offset-3" href="/">Time Story</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
