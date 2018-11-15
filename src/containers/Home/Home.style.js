import styled, {css} from 'styled-components';

export const Image = styled.img`
  width: 100%;
`;

export const HeroImage = styled.div`
  height: 80vh;
  background-image: url('${require('../../assets/skydive.JPG')}');
  margin-top: 20px;
  margin-bottom: 50px;
  padding-left: 10px;
  padding-top: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  text-align: left;    
  color: white;
  font-size: 1.5em;
  h1 {
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;