import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/slick.css';
import {Card} from "react-bootstrap";

type Props = {
    title: string
    cardsToShow: number
    cards: JSX.Element[]
}

function CardSlider({title, cardsToShow, cards}: Props) {
    if (cardsToShow < 1) {
        cardsToShow = 1
    }

    let breaks = []

    for (var i = 0; i < 3; i++) {
        if (cardsToShow < 1) {
            breaks.push(1)
        }
        else {
            breaks.push(cardsToShow)
            cardsToShow--
        }
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: cardsToShow,
        slidesToScroll: cardsToShow,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: breaks[0],
                    slidesToScroll: breaks[0],
                    infinite: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: breaks[1],
                    slidesToScroll: breaks[1],
                    infinite: true
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: breaks[2],
                    slidesToScroll: breaks[2],
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

    let cardTitle;
    if (title) {
        cardTitle = <Card.Title className="text-monospace text-center m-3">{title}</Card.Title>
    }

    return (
        <Card>
            {cardTitle}
            <Card.Body className="px-5 pt-0 pb-4">
                <Slider {...settings}>
                    {cards}
                </Slider>
            </Card.Body>
        </Card>

    );
}

export default CardSlider
