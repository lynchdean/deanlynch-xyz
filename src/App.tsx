import React from 'react';

import Topbar from "./components/Topbar"
import About from "./sections/About";
import Projects from "./sections/Projects";
import TechExp from "./sections/TechExp";
import "./css/app.css"
import Container from "react-bootstrap/Container";
import WorkExp from "./sections/WorkExp";

function App() {
    return (
        <div>
            <Topbar/>
            <Container>
                <About/>
                <TechExp/>
                <WorkExp/>
                <Projects/>
            </Container>
        </div>

    );
}

export default App;
