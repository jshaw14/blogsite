import React, {Component} from 'react';
import Zoomy from 'react-zoomy';

class Projects extends Component {
    render(){
        return (
        <div>
        <h1>This is projects</h1>   
            <Zoomy
              imageUrl={require('../../assets/titanic.jpg')}
              renderThumbnail={({ showImage }) => 
                  <img src={require('../../assets/titanic_tn.jpg')} onClick={showImage}/>}
              scale={[1.1, 1.1]}
              imageProps={{
                style: {
                  width: '100vw',
                  height: 'auto'
                }
              }}
            />
        </div>
        );
    }
}

export default Projects;