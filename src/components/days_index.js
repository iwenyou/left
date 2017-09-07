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
                      <input type="date" className="form-control" onChange={this.birthdayChange}/>
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
                      <input type="number" className="form-control" onChange={this.ageChange}/>
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
      return (
        <div className="index">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 info">
                <p>
                  It is {this.state.timeOfDay} am in your life
                </p>
                <p>
                  {this.state.years} years until the end...</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default daysIndex;
