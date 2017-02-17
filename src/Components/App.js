import React, { Component } from 'react';
import Scroll from 'react-scroll';
import './App.css';

import LandingScene from './LandingScene';
import LandingPage from './LandingPage';
import ProjectsPage from './ProjectsPage';
import AnchoredNav from './AnchoredNav';

let Element = Scroll.Element

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winHeight: window.innerHeight,
      fixNav: false,
      firefox: navigator.userAgent.indexOf("Firefox") > 0
    };

    this.updateHeight = this.updateHeight.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("scroll", this.handleScroll);
  }

  updateHeight() {
    this.setState(
      {
        winHeight: window.innerHeight
      }
    )
  }

  handleScroll(e) {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    this.setState({
      fixNav: scrollTop >= 200
    });
  }

  render() {
    let LandingBG = this.state.firefox ?
      <div className="Landing-bg-no3d" />:
      <LandingScene height={this.state.winHeight} />;
    return(
    <div className="App">
      <AnchoredNav expanded={this.state.fixNav} />
      <div className="Landing-bg">
        {LandingBG}
      </div>
      <Element name="landing" className="Landing">
        <LandingPage />
      </Element>
      <Element name="projects" className="Projects">
        <ProjectsPage />
      </Element>
    </div>

      );
  }
}

export default App;
