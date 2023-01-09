import React from "react";
import Container from "./components/Layout/Container/MainContainer";
import Header from "./components/Layout/Header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Container>
      <Header title="Rick and Morty" />
      <Home />
    </Container>
  );
}

export default App;
