import React, { Component } from 'react';
import { Background } from './App.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ReallySmoothScroll from 'really-smooth-scroll';
import { hashHistory } from 'react-router';
import FooterBar from '../../components/Footer/FooterBar';

hashHistory.listen(() => {
  window.scrollTo(0,0);
});

ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <div>
        <Background/>
        <NavigationBar/>
        <FooterBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
