import React, { Component, PropTypes } from 'react';
import {Container} from 'theme/grid';
import {
  Image,
  HeroImage,
  RevealP
} from './Home.style';

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <HeroImage>
          <h1>Jordan Shaw</h1>
          <h2>Developer</h2>
        </HeroImage>
        {/*<Image src={require('../assets/hero.gif')} alt="hero-image"/>*/}
        <RevealP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in velit dolor. In et dolor non sapien ultricies hendrerit. Maecenas ultricies porttitor est, sit amet eleifend sem egestas ut. Cras eget imperdiet est. Cras viverra ligula urna, eget rutrum erat lacinia nec. Praesent nec libero accumsan turpis molestie dapibus. Mauris scelerisque ligula sed felis ultricies, ut efficitur orci dignissim. Nam eleifend ligula sit amet congue dapibus. Vestibulum ut nisi vel quam luctus mollis vel ac mi. Vivamus pellentesque finibus sapien quis convallis. Donec at interdum mi. Sed finibus sed justo ac malesuada. Aliquam pulvinar pellentesque lacinia. Integer commodo blandit quam, ut blandit quam pretium eget.
        </RevealP>
      </Container>
    );
  }
}