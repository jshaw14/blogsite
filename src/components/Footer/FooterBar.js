import React, {Component} from 'react';
import { FooterContainer, FooterItem } from './FooterBar.style';

class FooterBar extends Component {
    render(){
        return (
            <FooterContainer>
                <FooterItem>
           <a href="https://github.com/jshaw14"><img src={require('../../assets/GitHub-Mark-32px.png')} alt=""/></a>
            </FooterItem>
            </FooterContainer>
        );
    }
}

export default FooterBar;