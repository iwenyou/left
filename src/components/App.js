import React, { Component } from 'react';

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
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/about">About Me</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
