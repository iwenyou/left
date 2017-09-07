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
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Time Story</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#">WHO</a>
                </li>
                <li>
                  <a href="#">WHAT</a>
                </li>
                <li>
                  <a href="#">WHERE</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
