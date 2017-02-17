import React, { Component } from 'react';
import DepthDiv from './DepthDiv';

class PerspectiveScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      perspectiveX: 50,
      perspectiveY: 20,
      lastMove: Date.now()
    };

    this.handlePerspective = this.handlePerspective.bind(this);
  }

  componentWillMount() {
    this.width = this.props.width || this.props.height * 2;
    this.height = this.props.height || this.props.width / 2;
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.handlePerspective)
    window.addEventListener('deviceorientation', this.handlePerspective)
  }

  //Update state based on mouse position or device orientation
  handlePerspective(e) {
    if(Date.now() - this.state.lastMove > 100) {

      let xPagePercentage = (window.innerWidth-e.pageX)/window.innerWidth;
      let yPagePercentage = (window.innerHeight-e.pageY)/window.innerHeight;
      if(e.type === 'deviceorientation') {
        xPagePercentage = e.gamma/30;
        yPagePercentage = e.beta/30;
      }

      this.setState({
        perspectiveX: (50 - this.props.delta) +
          xPagePercentage * this.props.delta * 2,
        perspectiveY: (50 - this.props.delta) +
          yPagePercentage * this.props.delta * 2,
        lastMove: Date.now()
      })
    }
  }

  renderDepths(props) {
    return React.Children.map(props.children, child => {
      if (child.type === DepthDiv)
        return React.cloneElement(child, {
          height: this.height,
          width: this.width,
          perspective: props.perspective,
          delta: props.delta
        })
      else
        return child
    })
  }

  render() {
    let perspectiveStyles = {
      position: 'absolute', left: '50%', marginLeft: `-${this.width/2}px`,
      height: this.height + 'px',
      overflowY: 'visible',
      width: this.width + 'px',
      perspective: `${this.props.perspective || '2000'}px`,
      perspectiveOrigin: `
        ${this.state.perspectiveX}%
        ${this.state.perspectiveY}%`,
      transition: `all 1s ease-out`,
    }

    return (
      <div className={this.props.className} style={perspectiveStyles}>
        {this.renderDepths(this.props)}
      </div>
    );
  }
}

export default PerspectiveScene;
