import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/slick.css';
import {Card} from "react-bootstrap";

type Props = {
    title: string
    cards: JSX.Element[]
}

function CardSlider({title, cards}: Props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        // appendDots: (dots: any) => (
        //     <div
        //         style={{
        //             // backgroundColor: "#ddd",
        //             // color: "#FFF",
        //             borderRadius: "10px",
        //             padding: "10px"
        //         }}
        //     />),
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    };

    return (
        <Card className="pb-4">
            <Card.Title className="text-monospace text-center m-3">{title}</Card.Title>
            <Card.Body className="px-5 pt-0">
                <Slider {...settings}>
                    {cards}
                </Slider>
            </Card.Body>
        </Card>

    );
}

export default CardSlider
