import React, {Component} from 'react';

class daysIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  onFormSubmit(event){
    event.preventDefault();
  }

  render() {
    if (!this.state.term) {
      return (
        <div className="search-bar">
          <form className="input-group" onSubmit={this.onFormSubmit}>
            <input
              className="form-control"
              value={this.state.term}
              placeholder="enter your birthday"
                />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-submit">
                  enter
                </button>
              </span>
          </form>
        </div>
      );
    } else if (this.state.term){
      return (
        <div>
          2
        </div>
      );
    }
  }
}


export default daysIndex;
