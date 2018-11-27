import styled from 'styled-components';
import { red } from '../../theme/variables';
import { Relative, Flex } from '../../theme/grid';

export const Title = styled.h1`
    margin-top: 0;
    color: ${red};
`;

export const VideoContainer = styled(Flex)`
    width: 50%;
    padding-left: 10px;
    flex-shrink: 0;
    flex-grow: 0;
`;