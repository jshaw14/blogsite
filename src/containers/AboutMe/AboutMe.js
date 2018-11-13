import React, { Component } from 'react';
import { Container, Flex } from '../../theme/grid';
import { Title, VideoContainer } from './AboutMe.style';
import ReactPlayer from 'react-player';
import { H2, P } from '../../theme/types';

class AboutMe extends Component {
  render() {
    return (
      <Container>
          <Title>Bio</Title>
          <H2 align="left">What's the craic?</H2>
          <Flex>
          <P align="center">This website is the start of something truly special.  Maybe I'll add a video now.</P>
          <VideoContainer>
          <ReactPlayer
            controls
            url={require('../../assets/street-performer.mp4')}/>
           </VideoContainer> 
            </Flex>
            <P>Hope you liked that.  This will be a bio of my life.</P>
      </Container>
    );
  }
}

export default AboutMe;
