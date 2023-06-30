import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

    :root {
        --app-width: 100vw;
   
    }

 
    input[data-autocompleted] {
        background-color: transparent !important;
    }

    html,
    body {
      margin: 0;
      padding: 0;
  background-color: #1e1b1b;

    }
    
    img {
      display: flex;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      overscroll-behavior: contain;
      -webkit-overflow-scrolling: unset;
      text-decoration: none;
      color: #fff;

    }
    
    input,
    textarea {
      margin: 0;
      padding: 0;
    }
    
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
  
    
    body {
      font-family: 'SF UI Text', sans-serif;
      letter-spacing: -0.4px;
      overflow: hidden;
      overscroll-behavior: contain;
      -webkit-overflow-scrolling: unset; 
    }
    
    html {
      height: -webkit-fill-available;
    }
    
    ul,
    ol {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      padding: 0;
    }
    
    input,
    textarea,
    select {
      font-family: inherit;
    }

    a,
    button {
      outline: none !important;
    }
`;

export default GlobalStyle;
