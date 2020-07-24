import React from "react";
import { Route } from "react-router-dom";
import About from "../Components/About";
import Board from "../Components/Board";
import Contact from "../Components/Contact";
import Mypage from "../Components/Mypage";

const Router = () => {
  return (
    <div>
      <Route path="/about" component={About} />
      <Route path="/board" component={Board} />
      <Route path="/mypage" component={Mypage} />
      <Route path="/contact" component={Contact} />
    </div>
  );
};

export default Router;
