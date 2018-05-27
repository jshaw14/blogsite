import React, { Component, PropTypes } from 'react';
import {
  Image,
  HeroImage,
  RevealP
} from './Home.style';
import Container from '../theme/grid/Container';

export default class Home extends Component {
  static propTypes = {};


  render() {
    return (
        <Container>
        <HeroImage>
          <h1>Jordan Shaw</h1>
          <h2>Developer</h2>
        </HeroImage>
       
        <RevealP>
          Is this website complete yet? No
        </RevealP>
        </Container>
    );
  }
}