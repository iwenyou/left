import React, {Component} from 'react';

class daysIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      birthday: 0,
      age: 0
    };

    this.birthdayChange = this.birthdayChange.bind(this);
    this.ageChange = this.ageChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  birthdayChange(event){
    this.setState({birthday: event.target.value});
  }

  ageChange(event){
    this.setState({age: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
  }

  render() {
    if (!this.state.birthday) {
      return (
        <div className="search-bar">
          <form className="input-group" onSubmit={this.onFormSubmit}>
            <input
              className="form-control"
              type="date"
              placeholder="enter your birthday"
              onChange={this.birthdayChange}
                />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-submit">
                  enter
                </button>
              </span>
          </form>
        </div>
      );
    } else if (!this.state.age){
      return (
        <div className="search-bar">
          <form>
            <label>
              Please enter your expect age~
            </label>
            <input
              type="number"
              onChange={this.ageChange}
              />
          </form>
        </div>
      );
    }
  }
}


export default daysIndex;
