import React from "react";
import Container from "./components/Layout/Container/MainContainer";
import Header from "./components/Layout/Header/Header";

function App() {
  return (
    <Container>
      <Header title="Rick and Morty" />
      <h1>Home</h1>
    </Container>
  );
}

export default App;
