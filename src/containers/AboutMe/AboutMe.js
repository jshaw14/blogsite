import React, { Component } from 'react';
import { Container, Flex } from '../../theme/grid';
import { VideoContainer } from './AboutMe.style';
import ReactPlayer from 'react-player';
import { H2, P, Title } from '../../theme/types';

class AboutMe extends Component {
  render() {
    return (
      <Container>
          <Title>Bio</Title>
          <H2 align="left">What's the craic?</H2>
          <Flex>
          <P align="left">This website is the start of something truly special.  It's the first one I have ever developed.
          Maybe I'll add a video now.</P>
          <VideoContainer align="right">
          <ReactPlayer
            url={require('../../assets/street-performer.mp4')}
            controls />
           </VideoContainer> 
            </Flex>
            <P>So...about me.  I am a software developer from Belfast.  I would describe myself as a bit of a generalist though.
                  My previous work includes window cleaning, retail, cleaning a care home, admin at an estate agency, 
                  entertaining groups at an escape room and marketing for a university careers service.  Very conventional.  I'm planning to use this website 
                  as a portfolio of my work as a developer, but also leave some room for my other interests too. 
            </P>
            <H2>Academic Background</H2>
            <ul>
            <li>2013-2016: Queen's University Belfast, BSc Physics</li>
            <p>Achieved first class honours, 'Class of 59' prize for best mark in BSc project </p>
            <p>After leaving school, I studied Physics at Queen's.  I particularly enjoyed the modules in Astrophysics
              and Solid State Physics, and also got my first taste of programming by using C.  My final year research included projects on
              the characteristics of Erbium Doped Fibre Amplifiers and the binary star BV Cen as a possible supernova progenitor.  
              The BV Cen project involved using the Linux software Molly to analyse spectral data.</p>
            <li>2016-2017: Queen's University Belfast, MSc Software Development</li>
            <p>Pass with distinction</p>
            <p>A conversion course masters degree which included modules in Software Engineering, Databases, Java Programming, Software Testing and Verification,
              Android App Development and an individual development project.</p>
              <p>Technologies learned included Java, XML, HTML, Android App Development, SQL</p>
              <p>Achieved a distinction in individual project.  The project produced an Android application which allowed the user to draw on 
                screen using a magnet held near the phone.  The magnet acted as a stylus.
              </p>
            <li>Other Qualifications</li>
            <p>Google Digital Garage Certificate of Online Proficiency</p>
            </ul>
            <H2>Work Experience</H2>
            <ul>
            <li>2018-19: Software Developer, Allstate Northern Ireland</li>
            <p>This was a Java developer role in a scrum team as part of a scaled agile program.</p>
            <p>While at Allstate I have taken training courses in both technical and soft skills</p>
            <li>2019-present: Engineer, Contrast Security</li>
            <p>Full stack engineer role in appsec space</p>
            </ul>
            <H2>Technical Skills</H2>
            <p>Java, Javascript, HTML, CSS, React JS, SQL, XML, C</p>
            <p>Maven, Github, Android Studio, Trello, JIRA, Jenkins</p>
            <p>Certified SAFe® 4 Agilist</p>
            <img src={require('../../assets/certified-safe-4-agilist.png')} alt="" height='128'/>
            <H2>Other Interests</H2>
            <ul>
              <li>I'm massively interested in travel.</li>
              <li>Mobile phone photography.  I'm an amateur.  You'll find some of my snaps scattered throughout this site.</li>
              <li>Music - a heavy spotify user</li>
              <li>Architecture and urban design</li>
            </ul>
      </Container>
    );
  }
}

export default AboutMe;
