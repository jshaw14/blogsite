import React, {Component} from 'react';
import Zoomy from 'react-zoomy';
import { ImageButton, Index, ImageContainer, Title } from './Projects.style';
import { Container, Relative, Flex } from '../../theme/grid';
import ParallaxImage from 'react-image-parallax2';

class Projects extends Component {
    render(){
        return (
        <Container>
            <Title>Projects</Title>
            <Relative marginTop='100px' marginBottom='50px'>
                <Index>
                    <h1>01</h1>
                </Index>
            <h1>Modelling Chaos theory iterative maps using C</h1>
            </Relative>
            <p>A university project using a C program to produce an iterative map and find the Lyapunov exponent.</p>
            <Flex justify={'center'} marginBottom="4em">
            <Zoomy
              imageUrl={require('../../assets/titanic_tn.jpg')}
              renderThumbnail={({ showImage }) => 
                  <ImageButton  onClick={showImage}>
                    <img 
                        src={require('../../assets/titanic_small.png')}
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
            <p>This was the subject of my MSc dissertation.  The idea was to produce an Android application whcih could be controlled using a magnet.</p>
<ImageContainer>
            <ParallaxImage
                reduceHeight={0.4}
            src="https://r.hswstatic.com/w_907/gif/tesla-cat.jpg"/>    
                </ImageContainer>
                <Relative marginTop="100px" marginBottom="50px">
                <Index><h1>03</h1></Index>
            <h1>EDFA</h1>
            </Relative>
            <p>Erbium Doped Fibre Amplifiers, obviously.</p>
            <Relative marginTop="100px" marginBottom="50px">
                <Index><h1>04</h1></Index>
            <h1>This website</h1>
            </Relative>
            <p>This website was created using React JS with npm.  I followed the tutorials set out by FroDev and made tweaks.  The site is deployed using Netlify.  I have a keen interest in web development so this site has been a fun hobby, but I'm a perfectionist too so it is a constant work in progress!</p>
            <Relative marginTop="100px" marginBottom="50px">
                <Index><h1>05</h1></Index>
            <h1>BV Cen</h1>
            </Relative>
            <p>BV Cen - is it a possible supernova progenitor?  I tried to get to the bottom of the case.  I was studying Astrophysics at the time.</p>
                <Relative marginTop="100px" marginBottom="50px">
                <Index><h1>06</h1></Index>
            <h1>CarFinder</h1>
            </Relative>
            <p>This was an Android app developed at University to enable the user to locate their parked car.</p>
            <Relative marginTop="100px" marginBottom="50px">
                <Index><h1>07</h1></Index>
            <h1>?</h1>
            </Relative>
            <p>More is in the works.</p>
        </Container>  
        
        
        );
    }
}

export default Projects;
