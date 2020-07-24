import React from "react";
import Header from "./Layout/Header";
import Navigation from "./Layout/Navigation";
import styled from "styled-components";
import Router from "./Routes/Router";

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Router />
    </div>
  );
};

export default App;
