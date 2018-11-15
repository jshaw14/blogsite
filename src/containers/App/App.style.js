import styled from 'styled-components';
import { yellow } from '../../theme/variables';
export const Background = styled.div`
    position: fixed;
    width: 100vw;
    height: 80vw;
    background-image: url('${require('../../assets/geometric.jpg')}');
    background-color: ${yellow};
    opacity: 0.2;
    background-size: cover;
    background-repeat: repeat;
    background-position: center;
    z-index: -99;
`;
