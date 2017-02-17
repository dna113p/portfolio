import React, {Component} from 'react';

class DepthDiv extends Component {

  //Scales the div back to the size of the window
  scale(distance) {
    return(
      distance + 2 *
      (distance/2 + distance * this.props.delta / 100) *
      this.props.depth / this.props.perspective
    )
  }

  render() {
    let props = this.props;
    let height = this.scale(props.height);
    let width = height * 2;

    let styles = {
      height: `${height}px`,
      width: `${width}px`,
      position: 'absolute', left: '50%', marginLeft: `-${width/2}px`,
      bottom: '0',
      transformOrigin: 'center bottom',
      transform: `translateY(1px) translateZ(-${this.props.depth}px)`,
    }
    let reflection = {
      transform: `scaleY(-1) translateZ(-${this.props.depth}px)`,
      filter: 'brightness(0.7)'
    }

    const Main =
      <div style={styles} >
        {this.props.children}
      </div>

      const Reflection = this.props.reflect ? React.cloneElement(Main,
        {style: Object.assign({},styles,reflection)}) : "";

    return (
      <div>
        {Main}
        {Reflection}
      </div>
    )
  }
}


export default DepthDiv;
