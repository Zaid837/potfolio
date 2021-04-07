import React from "react";
import "./App.css";
import Intro from "./components/Intro";
import Loader from "./components/Loader";
import Projects from "./components/Projects";
import Why from "./components/why";

function App() {
  return(
    <div>
      <Intro/>
      {/* <Loader/> */}
      <Why/>
      <Projects/>
    </div>
  )
}

export default App;
