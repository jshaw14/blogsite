import React, {Component} from 'react';
import Zoomy from 'react-zoomy';
import { ImageButton, Index, ImageContainer } from './Projects.style';
import { Container, Relative, Flex } from '../../theme/grid';
import ParallaxImage from 'react-image-parallax2';
import { Title } from '../../theme/types';
import EDFApdf from "../../assets/EDFAFinalReport.pdf";
import BVCenReport from "../../assets/BVCenReport.pdf";
import Dissertation from "../../assets/Dissertation.pdf"

class Projects extends Component {

    render(){
        return (
        <Container>
            <Title>Projects</Title>
            <p>As a recent graduate finding his feet in the Software Industry, I've included work from my time at uni.  I'm learning and trying new things, so this list will improve and expand.
            </p>
            <Relative marginTop='100px' marginBottom='50px'>
                <Index>
                    <h1>01</h1>
                </Index>
                <h1>CarFinder</h1>
            </Relative>
            <p>This was an Android app developed at University to enable the user to locate their parked car.</p>
            <Flex justify={'center'} marginBottom="4em">
            <Zoomy
              imageUrl={require('../../assets/findmycar2.png')}
              renderThumbnail={({ showImage }) => 
                  <ImageButton  onClick={showImage}>
                    <img 
                        src={require('../../assets/findmycar2.png')}
                        alt="titanic"/> 
                    </ImageButton>
                            }
              scale={[1,1]}
              imageProps={{
                style: {
                  width: '80vw',
                  height: 'auto'
                }
              }}
            />
        </Flex>
 <Relative marginBottom="50px">
                <Index><h1>02</h1></Index>
            <h1>MagnetArt</h1>
            </Relative>
            <p>This was the subject of my MSc dissertation.  The idea was to produce an Android application which could be controlled using a magnet.</p>
<ImageContainer>
            <ParallaxImage
                reduceHeight={0.4}
                src={require('../../assets/screen_loading.png')}/>    
                </ImageContainer>
                <Relative marginTop="100px" marginBottom="50px">
                <a href={Dissertation} target="_blank">Open PDF</a>
                <Index><h1>03</h1></Index>
            <h1>EDFA</h1>
            </Relative>
            <p>This formed half of the final year Physics project.  Experiments were carried out to investigate the characteristics of Erbium Doped Fibre Amplifiers.  These have applications in communications such as optical fibres.</p>
        <a href={EDFApdf} target="_blank">Open PDF</a>
            <Relative marginTop="100px" marginBottom="50px">
                <Index><h1>04</h1></Index>
            <h1>This website</h1>
            </Relative>
            <p>This website was created using React JS with npm.  I followed the tutorials set out by FroDev and made tweaks.  The site is deployed using Netlify.  I have a keen interest in web development so this site has been a fun hobby, it is also a constant work in progress!</p>
            <Relative marginTop="100px" marginBottom="50px">
                <Index><h1>05</h1></Index>
            <h1>BV Cen</h1>
            </Relative>
            <p>This was an astrophysics project investigating whether the binary system BV Cen could be a possible supernova progenitor.  It formed half of my part of final year Physics project work.</p>
            <a href={BVCenReport} target="_blank">Open PDF</a>
                <Relative marginTop="100px" marginBottom="50px">
                <Index><h1>06</h1></Index>
            <h1>?</h1>
            </Relative>
            <p>More is in the works.</p>
        </Container>  
        
        
        );
    }
}

export default Projects;
