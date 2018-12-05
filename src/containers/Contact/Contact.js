import React, { Component, PropTypes } from 'react';

import {Button} from './Contact.style';
import {Container} from '../../theme/grid';


export default class Contact extends Component {
  static propTypes = {};

  render() {
    return (
        <Container>
   <p>Please feel free to contact me.</p>
   <p>Linkedin      Github</p>
   <p><b>Email Me</b></p>
   <p>Name<input></input></p>
   <p>Email<input type="email"></input></p>
   <p>Your Message</p><textarea rows="10" cols="50"></textarea>
   <p><Button>Submit</Button></p>
        </Container>
    );
  }
}