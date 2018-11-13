import React, { Component } from 'react';
import { Container, Relative, Flex } from '../../theme/grid';
import { Title } from './AboutMe.style'
import ReactPlayer from 'react-player';
import { H2 } from '../../theme/types'

class AboutMe extends Component {
  render() {
    return (
      <Container>
          <Title>Bio</Title>
          <H2 align="left">What's the craic?</H2>
          <p>This website is the start of something truly special.  Maybe I'll add a video below.</p>
          <ReactPlayer
            controls
            url={require('../../assets/street-performer.mp4')}/>
      </Container>
    );
  }
}

export default AboutMe;
