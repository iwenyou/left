import React, {Component} from 'react';

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
    const years = Math.round((age - diff ) / oneYear);
    const hours = Math.floor(diff/age*24);
    const minutes = Math.floor((diff/age)%1*60);
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
        var seconds = parseInt((duration/1000)%60)
            , minutes = parseInt((duration/(1000*60))%60)
            , hours = parseInt((duration/(1000*60*60))%24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
    }

  render() {
    if (!this.state.birthdayTrue) {
      return (
        <div className="search-bar">
          <form className="input-group" onSubmit={this.birthdaySubmit}>
            <input className="form-control" type="date" placeholder="enter your birthday" onChange={this.birthdayChange}/>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-submit">
                enter
              </button>
            </span>
          </form>
        </div>
      );
    } else if (!this.state.ageTrue) {
      return (
        <div className="search-bar">
          <form className="input-group" onSubmit={this.ageSubmit}>
            <label>
              Please enter your expect age~
            </label>
            <input type="number" onChange={this.ageChange}/>
            <button type="submit" className="btn btn-submit">
              enter
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h2>
            It is {this.state.timeOfDay} in your life~
          </h2>
          <h3>
            you have
          </h3>
          <h1>{this.state.years} years</h1>
          <h3>
            left in your life~
          </h3>
        </div>
      );
    }
  }
}


export default daysIndex;
