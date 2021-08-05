import * as React from 'react';
import data from "./data/tech"
import LogoCard from "../components/LogoCard";
import CardSlider from "../components/CardSlider";
import Card from "react-bootstrap/Card";

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
        <Card id="tech-slider" className=" p-0 mb-4">
                {getSlider("Technologies: ", data.primary)}
                {getSlider("", data.secondary)}
        </Card>
    )
}

export default TechExp;
