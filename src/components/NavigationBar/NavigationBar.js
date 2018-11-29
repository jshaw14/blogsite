import React, {Component} from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';

class NavigationBar extends Component {
    render(){
        return (
            <NavigationContainer>
            <a href="https://github.com/jshaw14"><img src={require('../../assets/GitHub-Mark-120px-plus.png')} height="48" width="auto" alt=""/></a>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/bio">Bio</NavItem>
            </NavigationContainer>
        );
    }
}

export default NavigationBar;