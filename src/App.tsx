import React from 'react';

import Topbar from "./components/Topbar"
import About from "./sections/About";
import Projects from "./sections/Projects";
import Alert from "react-bootstrap/Alert";

function App() {
    return (
        <div>
            <Topbar/>

            <Alert variant="warning" className="text-center m-0">
                This site is a <b>work-in-progress.</b> If you're interested, you can see more{' '}
                <Alert.Link href="https://github.com/lynchdean/deanlynch-xyz">on the GitHub repo.</Alert.Link>
            </Alert>

            <About/>

            <Projects/>

        </div>
    );
}

export default App;
