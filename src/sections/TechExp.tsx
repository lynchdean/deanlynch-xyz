import * as React from 'react';
import data from "./data/tech"
import LogoCard from "../components/LogoCard";
import CardSlider from "../components/CardSlider";

function TechExp() {
    function getSlider(title: string, data: any) {
        return (
            <CardSlider
                title={title}
                cards={data.map((card: any, index: number) => {
                        return (
                            <LogoCard key={index} title={card.title} img={card.image}/>
                        )
                    }
                )}
            />
        )
    }

    return (
        <div>
            <div id="tech1-slider">
                {getSlider("Primary Technologies: ", data.primary)}
            </div>
            <div id="tech2-slider">
                {getSlider("Secondary Technologies: ", data.secondary)}
            </div>
        </div>
    )
}

export default TechExp;
