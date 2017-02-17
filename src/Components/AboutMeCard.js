import React, { Component } from 'react';

class AboutMeCard extends Component {
  render() {
    return (
      <div onMouseLeave={this.handleMouseOut} className="Project-card" >
        <div className="flipper">
          <div className="front">
            <h1>About Me</h1>
          </div>
          <div onClick={this.handleLinks} className="back">
            <div className="title shown">
              <div className="titleInner">
                <h1>DJ Pelland</h1>
                <div className="title-right-side">
                  <p>I like to build things, with code, with photoshop, or in my garage.<br/> If you like what you see, drop me an email!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMeCard;
