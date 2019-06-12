import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    max-height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Apercu';
    min-height: 100%;
    min-width: 100%;
    color: #33176E;
  }

  h1 {
    font-family: 'Apercu';
    color: #33176E;
    font-weight: bold;
  }

  button {
    font-family: 'Apercu';
    color: #33176E;
    background-color: #D9C5F4;
  }

  body.fontLoaded {
    font-family: 'Apercu';
    color: #33176E;
  }

  #app{
    background-color: #F5F5F5;
    height: 90vh;
    width: 94vw;
    transform: translateY(3vw);
    margin: auto;
    position: relative;
  }

  a {
    text-decoration: none;
  }

  select {
    -webkit-appearance: none;
    color: #33176E;
  }

  p,
  label {
    font-family: 'Apercu';
    line-height: 1.5em;
    color: #33176E;
  }

  .logo {
    position: absolute !important;
    top: 0px !important;
    z-index: 2;
    width: 137px;
    height: 120px;
  }

  @font-face {
    font-family: 'Apercu';
    src: url('fonts/Apercu-Light.eot');
    src: url('fonts/Apercu-Light.eot?#iefix') format('embedded-opentype'),
        url('fonts/Apercu-Light.woff') format('woff'),
        url('fonts/Apercu-Light.ttf') format('truetype'),
        url('fonts/Apercu-Light.svg#Apercu-Light') format('svg');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Apercu';
    src: url('fonts/Apercu-Regular.eot');
    src: url('fonts/Apercu-Regular.eot?#iefix') format('embedded-opentype'),
        url('fonts/Apercu-Regular.woff') format('woff'),
        url('fonts/Apercu-Regular.ttf') format('truetype'),
        url('fonts/Apercu-Regular.svg#Apercu-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Apercu';
    src: url('fonts/Apercu-Bold.eot');
    src: url('fonts/Apercu-Bold.eot?#iefix') format('embedded-opentype'),
        url('fonts/Apercu-Bold.woff') format('woff'),
        url('fonts/Apercu-Bold.ttf') format('truetype'),
        url('fonts/Apercu-Bold.svg#Apercu-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
  }
`;

export default GlobalStyle;
