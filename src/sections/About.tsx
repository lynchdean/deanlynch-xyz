import * as React from 'react';
import Jumbo from "../components/Jumbo";

function About() {
    return (
        <Jumbo
            heading={"Hi, I'm Dean 👋"}
            line1={"I graduated from Computer Applications & Software Engineering in Dublin City University."}
            line2={"I'm currently looking for a graduate or entry-level position in software engineering. " +
            "I'm primarily interested in Python, Java, or JavaScript roles, but I'm open to anything else if it's a " +
            "good opportunity for me to learn and gain experience."}
            line3={"I'm eager to start working so please get in touch with me via LinkedIn or email if you might " +
            "have any suitable positions!"}
        />
    );
}

export default About;
