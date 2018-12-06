import React, { Component } from 'react';
import {Container} from '../../theme/grid';


export default class Contact extends Component {
  static propTypes = {};

  render() {
    return (
        <Container>
   <p>Please feel free to contact me.</p>
   <p><a href="https://www.linkedin.com/in/jordanwshaw/"><img src={require('../../assets/Logo-2C-75px-R.png')} height="32" width="auto" alt=""/></a></p>     
   <p><a href="https://github.com/jshaw14"><img src={require('../../assets/GitHub_Logo.png')} height="48" width="auto" alt=""/></a></p>
   <p><b>Email: </b><a href="mailto:jshawdev@gmail.com">jshawdev@gmail.com</a></p>
   {/* <p><b>Email Me</b></p> create a form 
   <p>Name <input></input></p>
   <p>Email <input type="email"></input></p>
   <p>Your Message </p><textarea rows="10" cols="50"></textarea>
   <p><Button>Submit</Button></p> */}
        </Container>
    );
  }
}