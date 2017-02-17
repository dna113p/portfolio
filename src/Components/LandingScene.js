import React, { Component } from 'react';
import './LandingScene.css';

import PerspectiveScene from './PerspectiveScene';
import DepthDiv from './DepthDiv';

import sunset from '../assets/sunset.jpg';

import Sailboat from './Sailboat';
import Sailboat2 from './Sailboat2';
import Hillside from './Hillside';

class LandingScene extends Component {
  render() {
    let height = this.props.height;
    return (
        <PerspectiveScene height={height}
                          className="Background"
                          perspective={1000}
                          delta={5}>

          <DepthDiv depth={1700} reflect >
            <img  src={sunset} role="presentation"
              style={{
                position: 'absolute',
                width: '100%',
                bottom:'0',
                transform: 'translateY(2px)'
              }}/>
          </DepthDiv>

          <DepthDiv depth={1000} reflect >
            <Hillside width={'43%'} />
          </DepthDiv>

          <DepthDiv depth={1000} reflect >
            <Sailboat width={'8%'}/>
          </DepthDiv>

          <DepthDiv depth={500} reflect >
            <Sailboat2 width={'16%'}/>
          </DepthDiv>


        </PerspectiveScene>
    );
  }
}

export default LandingScene;

