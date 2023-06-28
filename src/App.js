import styled from "styled-components";
import React from "react";
import { BrowserRouter } from "react-router-dom";

// import { createGlobalStyle } from "styled-components";
// import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import Navbar from "./components/header/Navbar";

import BackgroundEffect from "./background-effect/BackgroundEffect";

const Container = styled.div``;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Navbar />
        <BackgroundEffect />
      </Container>
    </BrowserRouter>
  );
};

export default App;
