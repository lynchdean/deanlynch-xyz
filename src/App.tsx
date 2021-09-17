import React from 'react';

import Topbar from "./components/Topbar"
import About from "./sections/About";
// import Projects from "./sections/Projects";
import TechExp from "./sections/TechExp";
import "./css/app.css"
import Container from "react-bootstrap/Container";
import WorkExpV2 from './sections/WorkExp';

function App() {
    return (
        <div>
            <Topbar/>
            
                <About/>
                <Container>
                <TechExp/>
                <WorkExpV2/>
                {/* <Projects/> */}
                
            </Container>
        </div>

    );
}

export default App;
