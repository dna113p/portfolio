import React, { Component } from 'react';
import hillside from '../assets/hillside.svg'

class Hillside extends Component {
  render() {

    let styles = {
      position: 'absolute',
      bottom: '0',
      left: '0',
      transformOrigin: 'bottom',
      transform: 'translateY(1px)',
      width: this.props.width
    }

    return (
      <img style={styles} src={hillside} role="presentation" />
    );
  }
}

export default Hillside;
