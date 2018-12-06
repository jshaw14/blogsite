import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import { yellow, red, black } from '../../theme/variables';
import { Link } from 'react-router';
import media from '../../theme/media';

export const NavigationContainer = styled(Flex)`
    top:0;
    width: 100vw;
    height: 56px;
    position: fixed;
    z-index:1;
    opacity: 0.8;
    justify-content: flex-end;
    background-color: white;
    font-size: auto;
    font-weight: bold;
`;

export const NavItem = styled(Link)`
    margin-left: 50px;
    margin-right: 50px;
    cursor: pointer;
    color: ${black};
    position: relative;
    text-decoration: none; 
    ${media.tablet`
        margin-left: 20px;
        margin-right: 20px;
    `}
    ${media.phone`
        margin-left: 10px;
        margin-right: 10px;
    `}

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
