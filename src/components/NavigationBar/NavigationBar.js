import React, {Component} from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';

class NavigationBar extends Component {
    render(){
        return (
            <NavigationContainer>
            <NavItem to="/">Home</NavItem>
            </NavigationContainer>
        );
    }
}

export default NavigationBar;
