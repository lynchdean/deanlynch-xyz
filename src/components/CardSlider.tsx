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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
