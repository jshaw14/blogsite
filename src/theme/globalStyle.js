import {injectGlobal} from 'styled-components';
import { black } from './variables'

/*es-lint disabled*/
injectGlobal`
@import url('https://fonts.googleapis.com/css?family=K2D');


body {
    font-family: 'K2D', cursive;
    font-size: 24px;
    color: ${black};
}

h1, h2, h3 {
    font-weight: normal;
}
`