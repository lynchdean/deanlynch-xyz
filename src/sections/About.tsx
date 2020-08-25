import * as React from 'react';
import Jumbo from "../components/Jumbo";
import AboutCard from "../components/AboutCard";

function About() {
    let about = require('./data/about.json')

    return (
        <div>
            <Jumbo
                heading={about.jumbo.heading}
                lines={about.jumbo.lines}
                cards={
                    about.jumbo.cards.map((card: any) => {
                            return (
                                <AboutCard title={card.title} img={require(card.image)}/>
                            )
                        }
                    )
                }
            />
        </div>
    );
}

export default About;
