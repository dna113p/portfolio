import React, { Component } from 'react';
import img from '../assets/sailboat2.svg';

class Sailboat2 extends Component {
  render() {

    let styles = {
      position: 'absolute',
      bottom: '0',
      left: '55%',
      transformOrigin: 'bottom',
      width: this.props.width,
    }

    return (
      <img src={img} style={styles} role="presentation">
      </img>
    );
  }
}

export default Sailboat2;
