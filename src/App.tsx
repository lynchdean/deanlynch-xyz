import React from 'react';

import Topbar from "./components/Topbar"
import About from "./sections/About";
import Projects from "./sections/Projects";

function App() {
    return (
        <div>
            <Topbar/>

            <About/>

            <Projects/>

        </div>
    );
}

export default App;
