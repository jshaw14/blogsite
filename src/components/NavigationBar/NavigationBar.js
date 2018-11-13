import React, {Component} from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';

class NavigationBar extends Component {
    render(){
        return (
            <NavigationContainer>
            <NavItem>Home</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Bio</NavItem>
            </NavigationContainer>
        );
    }
}

export default NavigationBar;