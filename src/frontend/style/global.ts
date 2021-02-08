import { createGlobalStyle } from 'styled-components';
import { font } from './vars';

interface GlobalStyleProps {
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    margin: 0;
    padding: 0;
    font-family: ${font};
    box-sizing: border-box;
    background-color: white;
  }
  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;


export default GlobalStyle;
