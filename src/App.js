import styled from "styled-components";
import React from "react";
import { BrowserRouter } from "react-router-dom";

// import { createGlobalStyle } from "styled-components";
// import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import Navbar from "./components/header/Navbar";
const Container = styled.div`
  background-color: #fff;
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Navbar />
      </Container>
    </BrowserRouter>
  );
};

export default App;
