import React, {Component} from 'react';

class daysIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      birthday: {},
      birthdayTure : false,
      age: {},
      ageTrue: false,
      left: {},
      leftTrue: false
    };

    this.birthdayChange = this.birthdayChange.bind(this);
    this.ageChange = this.ageChange.bind(this);
    this.birthdaySubmit = this.birthdaySubmit.bind(this);
    this.ageSubmit = this.ageSubmit.bind(this);

  }

  birthdayChange(event){
    this.setState({birthday: Date.parse(event.target.value)},()=>{
      console.log(this.state.birthday);
    });
  }

  ageChange(event){
    this.setState({age: (event.target.value) * 31556908800}, ()=>{
      console.log(this.state.age);
    });
  }

  birthdaySubmit(event){
    event.preventDefault();
    this.setState({birthdayTrue: true});
  }

  ageSubmit(event){
    event.preventDefault();
    this.setState({left: this.state.birthday - this.state.age},() => {
      console.log(this.state.left);
      this.setState({ageTrue: true});
    })
  }

  askBirthday(){
    return (
      <div className="search-bar">
        <form className="input-group" onSubmit={this.birthdaySubmit}>
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
  }

  askAge(){
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
            <button type="submit" className="btn btn-submit">
              enter
            </button>
        </form>
      </div>
    );
  }

  display(){
    return (
      <div>
        <h3>
          you have
          <span>
            {this.state.left}
          </span>
          years left in your life~
        </h3>
      </div>
    );
  }

  render() {
    if (!this.state.birthdayTrue) {
      return < askBirthday />;
    } else if (!this.state.ageTrue){
      return < askAge />;
    } else {
      return < display />
    }
  }
}


export default daysIndex;
