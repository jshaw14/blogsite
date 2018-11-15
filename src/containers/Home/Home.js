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
        </HeroImage>
        
       <WhenInView>
        {({isInView})=>
        <RevealP hide={!isInView}>
          Welcome to my portfolio.
        </RevealP>
  }
          </WhenInView>

        <WhenInView>
        {({isInView})=>
        <RevealP hide={!isInView}>
          It is a work in progress.  This highly anticipated project will be completed late 2018.
        </RevealP>
  }
          </WhenInView>

        <WhenInView>
        {({isInView})=>
        <RevealP hide={!isInView}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </RevealP>
  }
          </WhenInView>

               <WhenInView>
        {({isInView})=>
        <RevealP hide={!isInView}>
            The above is basically Latin for 'this is meaningless filler text'
        </RevealP>
  }
          </WhenInView>

        </Container>
    );
  }
}