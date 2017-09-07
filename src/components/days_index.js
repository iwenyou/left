import React, {Component} from 'react';

class daysIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      birthday: {},
      birthdayTure: false,
      age: {},
      ageTrue: false,
      days: {},
      hours: {},
      minutes: {},
      timeOfDay: "",
      weekends: {},
      diff: {}

    };

    this.birthdayChange = this.birthdayChange.bind(this);
    this.ageChange = this.ageChange.bind(this);
    this.birthdaySubmit = this.birthdaySubmit.bind(this);
    this.ageSubmit = this.ageSubmit.bind(this);
  }

  birthdayChange(event) {
    this.setState({
      birthday: Date.parse(event.target.value)
    });
  }

  ageChange(event) {
    this.setState({
      age: (event.target.value) * 31556908800
    });
  }

  birthdaySubmit(event) {
    event.preventDefault();

    this.setState({birthdayTrue: true});
  }

  ageSubmit(event) {
    event.preventDefault();
    const oneDay = 60*60*24*1000;
    const today = new Date();
    const diff = today - this.state.birthday;
    const age = this.state.age;
    const days = Math.round((age - diff) / oneDay);
    const hours = Math.floor(diff / age * 24);
    const minutes = Math.floor((diff / age) % 1 * 60);
    const timeOfDay = hours + ":" + minutes;
    const weekends = Math.floor(days/7);
    this.setState({
      timeOfDay: timeOfDay,
      hours: hours,
      minutes: minutes,
      days: days,
      weekends: weekends,
      diff: diff
    }, () => {
      this.setState({ageTrue: true});
    })
  }

  render() {

    if (!this.state.birthdayTrue) {
      return (
        <div className="form">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <div className="form-wrap">
                  <h1>Please enter your birthday</h1>
                  <form role="form" method="post" id="login-form" onSubmit={this.birthdaySubmit}>
                    <div className="form-group">
                      <input type="date" className="form-control" max="2012-12-31" onChange={this.birthdayChange}/>
                    </div>
                    <input type="submit" id="btn-login" className="btn btn-custom btn-lg btn-block btn-sharp" value="Submit"/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (!this.state.ageTrue) {
      return (

        <div className="form">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <div className="form-wrap">
                  <h1>How long you think you will live? (years)</h1>
                  <form role="form" method="post" id="login-form" onSubmit={this.ageSubmit}>
                    <div className="form-group">
                      <input type="number" className="form-control" min="20" onChange={this.ageChange}/>
                    </div>
                    <input type="submit" id="btn-login" className="btn btn-custom btn-lg btn-block btn-sharp" value="Submit"/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      // const setHours = {
      //
      // };
      // const minutes = `transform:rotate${this.state.minutes}deg;`;

      return (
        <div className="index">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <div className="time">
                  <p>
                    It is {this.state.timeOfDay}
                    <span> </span>
                     am in your life
                  </p>
                  <p>
                    you have spent
                    <p>
                      {Math.round(this.state.diff / 60000)}
                    </p>
                    minutes in this world
                  </p>
                  <p>
                    {this.state.days}
                    <span> </span>
                     days until the end...
                   </p>
                </div>
                <div className="col-xs-offset-0 col-md-offset-4">
                  <h4 className="ptop">
                    In these days, you will have
                  </h4>
                </div>
                 <div className="info">
                   <p>
                     {this.state.weekends}
                     <span> </span>
                     weekends
                   </p>
                   <p>
                     have
                     <span> </span>
                     {Math.round(this.state.days/365)*127}
                     <span> </span>
                     times of sex
                   </p>
                   <p>
                     eat
                     <span> </span>
                     {this.state.days*3}
                     <span> </span>
                     meals
                   </p>
                   <p>
                     receive Chirsmas presents
                     <span> </span>
                     {Math.round(this.state.days/365)}
                     <span> </span>
                     more times
                   </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default daysIndex;
