import styled from 'styled-components';
export const Background = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vw;
    margin: 0;
    padding: 0;
    background-image: url('${require('../../assets/7063.jpg')}');
    opacity:0.5;
    background-size: contain;
    background-position: center;
    z-index: -99;
`;
