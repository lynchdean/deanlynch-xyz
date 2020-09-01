import React from 'react';

import Topbar from "./components/Topbar"
import About from "./sections/About";
import Projects from "./sections/Projects";
import Alert from "react-bootstrap/Alert";
import TechExp from "./sections/TechExp";
import "./css/app.css"
import Container from "react-bootstrap/Container";

function App() {
    return (
        <div>
            <Topbar/>
            <Container>
                <About/>
                <Alert variant="warning" className="text-center mb-4">
                    This site is a <b>work-in-progress.</b> If you're interested, you can see more{' '}
                    <Alert.Link href="https://github.com/lynchdean/deanlynch-xyz">on the GitHub repo.</Alert.Link>
                </Alert>

                <TechExp/>
                <Projects/>

            </Container>
        </div>

    );
}

export default App;
