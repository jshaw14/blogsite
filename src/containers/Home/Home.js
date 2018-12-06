import React, { Component } from 'react';

import {
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
          Hi, my name's Jordan.
        </RevealP>
  }
          </WhenInView>

        <WhenInView>
        {({isInView})=>
        <RevealP hide={!isInView}>
          I'm a software developer from Belfast.
        </RevealP>
  }
          </WhenInView>

               <WhenInView>
        {({isInView})=>
        <RevealP hide={!isInView}>
            
        </RevealP>
  }
          </WhenInView>

        </Container>
    );
  }
}