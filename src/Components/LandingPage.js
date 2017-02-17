import React, { Component } from 'react';
import classNames from 'classnames';
import './LandingPage.css';
import BottomButton from './BottomButton';
import Signature from './Signature.js';

class LandingPage extends Component {

  render() {
    let classes = classNames({
      "Landing-signature": true,
    });
    return (
      <div className="LandingPage" >
        <Signature className={classes}/>
        <BottomButton text="Projects" />
      </div>
    );
  }
}

export default LandingPage;
