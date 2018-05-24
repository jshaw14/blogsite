import React, { Component, PropTypes } from 'react';
import {
  Image,
  HeroImage,
  RevealP
} from './Home.style';

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
        <div>
        <HeroImage>
          <h1>Jordan Shaw</h1>
          <h2>Developer</h2>
        </HeroImage>
       
        <RevealP>
          Is this website complete yet? No
        </RevealP>
        </div>
    );
  }
}