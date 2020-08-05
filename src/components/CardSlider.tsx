import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";

class CardSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            variableWidth: true,
        };

        return (
            <Slider {...settings}>
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
            </Slider>
        );
    }
}

export default CardSlider
