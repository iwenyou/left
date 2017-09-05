import React from 'react';

const birthdayForm = () => {
  return (
    <div className="search-bar">
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input className="form-control" value={this.state.term} placeholder="enter your birthday"/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-submit">
            enter
          </button>
        </span>
      </form>
    </div>
  );
}

export default birthdayForm;
