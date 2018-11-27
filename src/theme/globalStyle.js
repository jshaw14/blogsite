import {injectGlobal} from 'styled-components';
import { black } from './variables'

/*es-lint disabled*/
injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Chathura');


body {
    font-family: 'Chathura', sans-serif;
    font-size: 36px;
    color: ${black};
}

h1, h2, h3 {
    font-weight: normal;
}
`