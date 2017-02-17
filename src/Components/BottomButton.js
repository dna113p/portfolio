import React, { Component } from 'react';
import Scroll from 'react-scroll';
import './BottomButton.css';

let Link = Scroll.Link;
class BottomButton extends Component {

  render() {
    return (
      <Link className="Bot-button" activeClass="active" to="projects" spy={true} smooth={true} duration={600}>
        <h1 className="Bot-button-text">{this.props.text}</h1>
        <svg className="Bot-button-arrow">
          <path d="M0 0 L15 15 L30 0"></path>
        </svg>
      </Link>
    );
  }
}

export default BottomButton;
