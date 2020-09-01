import * as React from 'react';
import Jumbo from "../components/Jumbo";
import LogoCard from "../components/LogoCard";
import data from "./data/about"

function About() {

    return (
        <div>
            <Jumbo
                heading={data.heading}
                lines={data.lines}
                cards={data.cards.map((card: any) => {
                        return (
                            <LogoCard title={card.title} img={card.image}/>
                        )
                    }
                )}
            />
        </div>
    );
}

export default About;
