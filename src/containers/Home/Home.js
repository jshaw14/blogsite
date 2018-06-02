import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import {
  Image,
  HeroImage,
  RevealP
} from './Home.style';
import WhenInView from '../../components/WhenInView/WhenInView';
import {Container} from '../../theme/grid';


export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
        <Container>
        <HeroImage>
          <h1>Jordan Shaw</h1>
          <h2>Developer</h2>
        </HeroImage>
        
       <WhenInView>
        {({isInView})=>
        <RevealP hide={!isInView}>
          This will be my online portfolio.  Have I finished it yet?
        </RevealP>
  }
          </WhenInView>

        <WhenInView>
        {({isInView})=>
        <RevealP hide={!isInView}>
          No, I have not.  It is a work in progress.
        </RevealP>
  }
          </WhenInView>

        <WhenInView>
        {({isInView})=>
        <RevealP hide={!isInView}>
        This highly anticipated project will be completed late 2018.
        </RevealP>
  }
          </WhenInView>
        </Container>
    );
  }
}