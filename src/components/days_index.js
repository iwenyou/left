import React, {Component} from 'react';

import NavBar from './nav_bar';

class daysIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      birthday: {},
      birthdayTure: false,
      age: {},
      ageTrue: false,
      years: {},
      timeOfDay: ""
    };

    this.birthdayChange = this.birthdayChange.bind(this);
    this.ageChange = this.ageChange.bind(this);
    this.birthdaySubmit = this.birthdaySubmit.bind(this);
    this.ageSubmit = this.ageSubmit.bind(this);
    this.msToTime = this.msToTime.bind(this);

  }

  birthdayChange(event) {
    this.setState({
      birthday: Date.parse(event.target.value)
    }, () => {
      console.log(this.state.birthday);
    });
  }

  ageChange(event) {
    this.setState({
      age: (event.target.value) * 31556908800
    }, () => {
      console.log(this.state.age);
    });
  }

  birthdaySubmit(event) {
    event.preventDefault();
    this.setState({birthdayTrue: true});
  }

  ageSubmit(event) {
    event.preventDefault();
    const oneYear = 31536000000;
    const today = new Date();
    const diff = today - this.state.birthday;
    const age = this.state.age;
    const years = Math.round((age - diff) / oneYear);
    const hours = Math.floor(diff / age * 24);
    const minutes = Math.floor((diff / age) % 1 * 60);
    const timeOfDay = hours + ":" + minutes;
    this.setState({timeOfDay: timeOfDay});
    this.setState({
      years: years
    }, () => {
      console.log(this.state.left);
      this.setState({ageTrue: true});
    })
  }

  msToTime(duration) {
    var seconds = parseInt((duration / 1000) % 60),
      minutes = parseInt((duration / (1000 * 60)) % 60),
      hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10)
      ? "0" + hours
      : hours;
    minutes = (minutes < 10)
      ? "0" + minutes
      : minutes;
    seconds = (seconds < 10)
      ? "0" + seconds
      : seconds;

    return hours + ":" + minutes + ":" + seconds;
  }

  render() {


    if (!this.state.birthdayTrue) {
      return (
        <div id="form">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <div className="form-wrap">
                  <h1>Please enter your birthday</h1>
                  <form role="form" method="post" id="login-form" onSubmit={this.birthdaySubmit}>
                    <div className="form-group">
                      <input type="date" className="form-control" onChange={this.birthdayChange}/>
                    </div>
                    <input type="submit" id="btn-login" className="btn btn-custom btn-lg btn-block" value="Submit"/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (!this.state.ageTrue) {
      return (

        <div id="form">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <div className="form-wrap">
                  <h1>Please enter your expect age</h1>
                  <form role="form" method="post" id="login-form" onSubmit={this.ageSubmit}>
                    <div className="form-group">
                      <input type="number" className="form-control" onChange={this.ageChange}/>
                    </div>
                    <input type="submit" id="btn-login" className="btn btn-custom btn-lg btn-block" value="Submit"/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="index">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 info">
                <p>
                  It is {this.state.timeOfDay} in your life~
                </p>
                <p>
                  you have {this.state.years} years left in your life~</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default daysIndex;
