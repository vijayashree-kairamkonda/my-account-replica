import React from "react";
import { Header } from "./components/Header";
import { GlobalStyle } from "./components/styledComponents";
import { EndPoints } from "./Routes";
import "../src/Global.css";

function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <EndPoints />
    </>
  );
}

export default App;
