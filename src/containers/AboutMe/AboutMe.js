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
          <P align="left">This website is the start of something truly special.  Maybe I'll add a video now.</P>
          <VideoContainer align="right">
          <ReactPlayer
            url={require('../../assets/street-performer.mp4')}
            controls />
           </VideoContainer> 
            </Flex>
            <P>Hope you liked that.  This will be a bio of my life.  I am a software developer from Belfast.  I would describe myself as a bit of a generalist though.
                  My previous work includes window cleaning, retail, cleaning a care home, admin at an estate agency, 
                  entertaining groups at an escape room and marketing for a university careers service.  Very conventional. 
            </P>
            <H2>Academic Background</H2>
            <ul>
            <li>2013-2016: Queen's University Belfast, BSc Physics</li>
            <p>Achieved first class honours and 'Class of 59' prize for best mark in BSc project </p>
            <li>2016-2017: Queen's University Belfast, MSc Software Development</li>
            <p>Pass with distinction</p>
            </ul>
            <H3>Other Qualifications</H3>
            <ul>
            <li>Google Digital Garage Certificate of Online Proficiency</li>
            </ul>
            <H2>Work Experience</H2>
            <ul>
            <li>2018-present: Software Developer, Allstate Northern Ireland</li>
            </ul>
            <H2>Technical Skills</H2>
            <p>Java, Javascript, HTML, React JS, SQL, XML, C</p>
            <p>Maven, Github, Android Studio</p>
            <p>Certified SAFe® 4 Agilist</p>
            <img src={require('../../assets/certified-safe-4-agilist.png')} alt="" height='256'/>
      </Container>
    );
  }
}

export default AboutMe;
