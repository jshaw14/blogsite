import React, {Component} from 'react';
import Zoomy from 'react-zoomy';
import {ImageButton} from './Projects.style';
import {Container} from '../../theme/grid';

class Projects extends Component {
    render(){
        return (
        <Container>
        <h1>This is projects</h1>   
            <Zoomy
              imageUrl={require('../../assets/titanic.jpg')}
              renderThumbnail={({ showImage }) => 
                  <ImageButton  onClick={showImage}>
                    <img 
                        src={require('../../assets/titanic_tn.jpg')}
                        alt="titanic"/> 
                    </ImageButton>
                            }
              scale={[1.1, 1.1]}
              imageProps={{
                style: {
                  width: '100vw',
                  height: 'auto'
                }
              }}
            />
        </Container>
        );
    }
}

export default Projects;