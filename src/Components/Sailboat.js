import React, { Component } from 'react';
import sailboat from '../assets/sailboat.svg';

class Sailboat extends Component {
  render() {

    let styles = {
      position: 'absolute',
      bottom: '0',
      left: '55%',
      transformOrigin: 'bottom',
      width: this.props.width
    }

    return (
      <img style={styles} src={sailboat} role="presentation">
      </img>
    );
  }
}

export default Sailboat;
