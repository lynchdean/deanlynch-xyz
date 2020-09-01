import * as React from 'react';
import data from "./data/tech"
import LogoCard from "../components/LogoCard";
import CardSlider from "../components/CardSlider";
import Card from "react-bootstrap/Card";

function TechExp() {
    function getSlider(data: any) {
        return (
            <CardSlider
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
            <Card className="my-3">
                <h3 className="text-monospace card-title m-3">Primary Technologies: </h3>
                {getSlider(data.primary)}
            </Card>

            <Card>
                <h3 className="text-monospace card-title m-3">Secondary Technologies: </h3>
                {getSlider(data.secondary)}
            </Card>
        </div>
    )
}

export default TechExp;
