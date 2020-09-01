import React from 'react';

import Topbar from "./components/Topbar"
import About from "./sections/About";
import Projects from "./sections/Projects";
import Alert from "react-bootstrap/Alert";
import TechExp from "./sections/TechExp";
import "./css/app.css"
import Container from "react-bootstrap/Container";
import {motion} from "framer-motion";

function App() {
    return (
        <div>
            <Topbar/>
            <Container>
                <motion.div
                    animate={{ scale: [0, 1] }}
                    transition={{ duration: 1 }}
                >
                <About/>

                <Alert variant="warning" className="text-center mb-4">
                    This site is a <b>work-in-progress.</b> If you're interested, you can see more{' '}
                    <Alert.Link href="https://github.com/lynchdean/deanlynch-xyz">on the GitHub repo.</Alert.Link>
                </Alert>

                <TechExp/>
                <Projects/>
                </motion.div>

            </Container>
        </div>

    );
}

export default App;
