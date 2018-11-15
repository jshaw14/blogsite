import styled from 'styled-components';
import { yellow } from '../../theme/variables';
export const Background = styled.div`
    position: fixed;
    width: 100vw;
    top: 10vh;
    height: 80vh;
    background-image: url('${require('../../assets/geometric.jpg')}');
    background-color: ${yellow};
    opacity: 0.2;
    background-size: 100%;
    background-repeat: repeat;
    background-position: center;
    z-index: -99;
`;
