import React from "react";
import Container from "./components/Layout/Container/MainContainer";
import Header from "./components/Layout/Header/Header";
import Routes from "./routes/index";

function App() {
  return (
    <Container>
      <Header title="Rick and Morty" />
      <Routes />
    </Container>
  );
}

export default App;
