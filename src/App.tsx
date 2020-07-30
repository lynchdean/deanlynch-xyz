import React from 'react';

import Topbar from "./components/Topbar"
import Jumbo from "./components/Jumbo";
import ProjectCard from "./components/ProjectCard";
import CardPaginator from "./components/CardPaginator";

function App() {
    return (
        <div>
            <Topbar/>
            <Jumbo
                heading={"Hi, I'm Dean 👋"}
                line1={"I graduated from Computer Applications & Software Engineering in Dublin City University."}
                line2={"I'm currently looking for a graduate or entry-level position in software engineering. " +
                "I'm primarily interested in Python, Java, or JavaScript roles, but I'm open to anything else if it's a " +
                "good opportunity for me to learn and gain experience."}
                line3= {"I'm eager to start working so please get in touch with me via LinkedIn or email if you might " +
                "have any suitable positions!"}
            />

            <CardPaginator/>

            <ProjectCard
                title="deanlynch-xyz"
                link={"https://github.com/lynchdean/deanlynch-xyz"}
                desc={"[WIP] Personal website build using React"}
                tech={"React"}
            />
            <ProjectCard
                title="deanlynch-xyz"
                link={"https://github.com/lynchdean/deanlynch-xyz"}
                desc={"[WIP] Personal website build using React"}
                tech={"React"}
            />
            <ProjectCard
                title="deanlynch-xyz"
                link={"https://github.com/lynchdean/deanlynch-xyz"}
                desc={"[WIP] Personal website build using React"}
                tech={"React"}
            />
            <ProjectCard
                title="deanlynch-xyz"
                link={"https://github.com/lynchdean/deanlynch-xyz"}
                desc={"[WIP] Personal website build using React"}
                tech={"React"}
            />

        </div>
    );
}

export default App;
