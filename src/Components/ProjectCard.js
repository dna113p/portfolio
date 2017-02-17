import React, { Component } from 'react';
import classNames from 'classnames';
import './ProjectCard.css';

class ProjectCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLink: false
    };
    this.handleLinks = this.handleLinks.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleLinks () {
    this.setState({
      showLink: !this.state.showLink
    });
  }

  handleMouseOut () {
    this.setState({
      showLink:false
    });
  }

  render() {
    let keywords = this.props.keywords.split(' ');
    let chips = keywords.map((word, i) => {
      return (<div className="chip" key={i}>{word}</div>)
    });

    let linkClasses = classNames({
      'links': true,
      'shown': this.state.showLink ,
      'hidden': !this.state.showLink
    });

    let titleClasses = classNames({
      'title': true,
      'shown': !this.state.showLink ,
      'hidden': this.state.showLink
    });

    return (
      <div onMouseLeave={this.handleMouseOut} className="Project-card" >
        <div className="flipper">
          <div className="front">
            <h1>{this.props.title}</h1>
          </div>
          <div onClick={this.handleLinks} className="back">
            <div className={titleClasses}>
              <div className="titleInner">
                <h1>{this.props.title}</h1>
                <div className="title-right-side">
                  <p>{this.props.description}</p>
                  <div className="chips-container">
                    {chips}
                  </div>
                </div>
              </div>
            </div>
            <div className={linkClasses}>
              <a href={this.props.liveUrl}><i className="fa fa-globe" />live</a>
              <a href={this.props.codeUrl}>code<i className="fa fa-code" /></a>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default ProjectCard;
