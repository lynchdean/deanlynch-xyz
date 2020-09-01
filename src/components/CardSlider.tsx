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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Card className="pb-5 mb-4">
            <Card.Title className="text-monospace m-3">{title}</Card.Title>
            <Card.Body className="px-5">
                <Slider {...settings}>
                    {cards}
                </Slider>
            </Card.Body>
        </Card>

    );
}

export default CardSlider
