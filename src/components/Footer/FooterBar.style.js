import styled from 'styled-components';
import { Div, Flex } from '../../theme/grid';
import { blue, yellow, red, black } from '../../theme/variables';
import { Link } from 'react-router';

export const FooterContainer = styled(Flex)`
    bottom:0;
    width: 100vw;
    position: fixed;
    z-index:1;
    opacity: 0.8;
    justify-content: flex-end;
`;

export const FooterItem = styled(Div)`
    margin-left: 30px;
    margin-right: 30px;
    font-size: 1.5em;
    cursor: pointer;
    color: ${black};
    position: relative;
    text-decoration: none; 

    &:hover{
        color: ${yellow};
        transform: scale(1.1, 1.1);
        &:after {
            content: ' ';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            transform: scale(1.5, 1.3);
        }
    }
`;
