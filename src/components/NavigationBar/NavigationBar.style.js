import styled from 'styled-components';
import { Div, Flex } from '../../theme/grid';
import { blue, yellow, red, black } from '../../theme/variables';
import { Link } from 'react-router';

export const NavigationContainer = styled(Flex)`
    top:0;
    width: 100vw;
    position: fixed;
    background-color: white;
    z-index:1;
    opacity: 0.8;
    justify-content: flex-end;
`;

export const NavItem = styled(Link)`
    margin-left: 50px;
    margin-right: 50px;
    font-size: 1.5em;
    cursor: pointer;
    color: ${black};
    position: relative;
    text-decoration: none; 

    &:hover{
        color: ${yellow};
        &:after {
            content: ' ';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: ${red};
            z-index: -1;
            transform: scale(1.5, 1.3);
        }
    }
`;
