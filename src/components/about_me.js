import React, {Component} from 'react';

class AboutMe extends Component {
  render(){
    return (
      <div id="aboutMe" className="container">
        <div className="row">
          <p className="col-xs-12 col-md-offset-3 col-md-6">Time Story is an inspirational web app I built that allows users to know how much time they have left in their life. A user will be able to learn the statistics of what is left in their life time and make wishes to their wishlist. </p>
        </div>
        <div className="row">
          <p className="col-xs-12 col-md-offset-3 col-md-6">I build this to help remind myself and others how short is our life. We should make every moment of our life counts, and never give up hope for a better future.</p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
