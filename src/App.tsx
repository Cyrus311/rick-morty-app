import React from "react";
import Container from "./components/Layout/Container/MainContainer";
import Header from "./components/Layout/Header/Header";
import Routes from "./routes/index";

function App() {
  return (
    <Container height="11vh" bgColor="#b29ce0">
      <Header title="Rick and Morty App" cssClass="mainHeader" />
      <Routes />
    </Container>
  );
}

export default App;
