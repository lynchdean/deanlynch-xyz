import * as React from 'react';
import Jumbo from "../components/Jumbo";

function About() {
    let about = require('./data/about.json')

    return (
        <Jumbo
            heading={about.heading}
            line1={about.line1}
            line2={about.line2}
            line3={about.line3}
        />
    );
}

export default About;
