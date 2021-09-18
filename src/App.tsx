import React from "react";

import Topbar from "./components/Topbar";
import About from "./sections/About";
import Tech from "./sections/Tech";
import Work from "./sections/Work";
import Projects from "./sections/Projects";
import "./css/app.css";

function App() {
  return (
    <div>
      <Topbar />
      <About />
      <Tech />
      <Work />
      <Projects/>
    </div>
  );
}

export default App;
