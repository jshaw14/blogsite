import React, {Component} from 'react';
import Zoomy from 'react-zoomy';
import { ImageButton, Index, ImageContainer, Title } from './Projects.style';
import { Container, Relative, Flex } from '../../theme/grid';
import { A } from '../../theme/types';
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
            <h1>npm install --save <A href="">react-zoomy</A></h1>
            </Relative>
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
 <Relative marginBottom="100px">
                <Index><h1>02</h1></Index>
            <h1>npm install --save <A href="">react-image-parallax2</A></h1>
            </Relative>
<ImageContainer>
            <ParallaxImage
                reduceHeight={0.3}
            src="https://r.hswstatic.com/w_907/gif/tesla-cat.jpg"/>    
                </ImageContainer>
                <Relative marginBottom="100px">
                <Index><h1>03</h1></Index>
            <h1>EDFA</h1>
            </Relative>
            <Relative marginBottom="100px">
                <Index><h1>04</h1></Index>
            <h1>Ths website</h1>
            </Relative>
            <Relative marginBottom="100px">
                <Index><h1>05</h1></Index>
            <h1>BV Cen</h1>
            </Relative>
                <Relative marginBottom="100px">
                <Index><h1>06</h1></Index>
            <h1>CarFinder</h1>
            </Relative>
        </Container>  
        
        );
    }
}

export default Projects;